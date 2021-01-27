const {hashPassword,comparePassword,generateToken} = require("./../helpers/helper");
const Token = require("../models/token");
const userService = require("../services/userService");
const gifService = require("../services/gifService");
const { verificationTokenSchema } = require("../schemas/auth");
const { helpers } = require("../helpers");
const Templates = require("../helpers/template");

module.exports.registerUser = async (req, res) => {
  try {
    const { email, firstName, lastName, userName, password } = req.body;
    const person = await userService.findByNameEmail(email, userName);
    if (person && person.email === email) {
      return res
        .status(303)
        .json({ message: "Email address is already registered" });
    }
    if (person && person.userName === userName) {
      return res.status(303).json({ message: "Username is already taken" });
    }
    const hash = await hashPassword(password);
    const register = await userService.createNewUser(email,firstName,lastName,userName,hash);
    const mail = await helpers.sendEmail(register, req, res);
    if (mail) {
      return res.status(201).json({
        success: register,
        message: "Account is successfully created and email has been sent."
      });
    } else {
      await userService.deleteUser(register._id);
      return res.status(400).json({
        message: "not created"
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.login = async (req, res) => {
  try {
    const user = await userService.findUserByEmail(req.body.email);
    if (!user)
      return res.status(404).send({ message: "Email is not registered!" });
    const passwordCheck = await comparePassword(
      req.body.password,
      user.password
    );
    if (!passwordCheck)
      return res.status(400).send({ message: "Invalid email or password" });
    if (!user.isVerified) {
      return res
        .status(410)
        .send({ message: "Email not verified, Please verify your email" });
    }
    const token = generateToken(user);
    if (!token)
      return res.status(500).send({ message: "Error in generating token" });
    return res
      .status(201)
      .json({ user: user, token, message: "Successfully logged in" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) {
      res.status(400).json({ message: "Failed to update user" });
      return;
    }
    res.status(201).json({ user: user, message: "Profile Updated" });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ message: error.message });
    } else {
      res.sendStatus(500);
    }
  }
};

module.exports.getAllUsers = async (req, res) => {
  try {
    const { pageNo, pageSize } = req.query;
    const users = await userService.getAllUsers(pageNo, pageSize);
    res.status(201).json({ users: users.users, count: users.count });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.verify = async (req, res, next) => {
  const tokenCode = verificationTokenSchema.validate(req.body);
  if (!tokenCode)
    return res.status(400).json({ message: "token is not provided" });
  try {
    const token = await Token.findOne({ token: req.body.token });
    if (!token) {
      return res.status(400).json({ message: "invalid Token" });
    }
    const user = await userService.getUserById(token.userId);
    if (!user) {
      return res.status(400).json({ message: "no user for this token." });
    }
    if (user.isVerified) {
      return res
        .status(400)
        .json({ message: " user has already been verified." });
    }
    await userService.verifyUser(user._id);
    return res.status(201).json({
      success: true,
      message: "Account is successfully verified."
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.resend = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userService.findUserByEmail(email);
    if (!user)
      return res.status(401).json({
        message:
          "The email address " +
          req.body.email +
          " is not associated with any account"
      });
    if (user.isVerified)
      return res
        .status(400)
        .json({ message: "This account has already been verified" });
    const mail = await helpers.sendEmail(user, req, res);
    if (mail) {
      return res.status(201).json({
        message: "Verification email has been sent."
      });
    } else {
      return res.status(400).json({
        message: "Failed to send verification email"
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.forget = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userService.findUserByEmail(email);
    if (!user) {
      return res
        .status(400)
        .send({ message: "No account exist with this email" });
    }
    if (user.isVerified === false) {
      return res.status(400).send({
        message:
          "Please verify your account with the link sent to your email before changing your password"
      });
    }
    const token = user.generateVerificationToken();
    // Send the mail
    const mail = await helpers.sendForGotEmail(user, token);
    if (mail) {
      return res.status(201).json({
        message: "Forgot password link  has been sent to your email."
      });
    } else {
      return res.status(400).json({
        message: "Failed to send email , try again"
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.reset = async (req, res) => {
  try {
    const token = await Token.findOne({ token: req.body.token });
    if (!token) {
      return res.status(400).json({ message: "invalid Token" });
    }
    var user = await userService.getUserById(token.userId);
    if (!user) {
      return res.status(400).json({ message: "no user for this token." });
    }
    var hash = await hashPassword(req.body.password);
    user.password = hash;
    try {
      let newUser = await userService.updatePassword(user._id, hash);
      if (newUser) {
        return res.status(200).json({
          success: true,
          message: "Password reset successfully",
          user: newUser
        });
      }
      return res.status(400).json({ message: "Password not updated." });
    } catch (err) {
      return res.status(500).json({ message: err, errr: "catch2" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, errr: "catch" });
  }
};

module.exports.addTempSetting = async (req, res) => {
  try {
    let { settings } = req.body;
    // console.log("settings ",settings)
    settings.userId = settings.userId._id;
    let setting = await userService.getSetttingByUserIDAndName(settings.userId, settings.name)
    console.log("setting of user ",setting)
    console.log("setting of userId ",setting[0]._id)
    console.log("setting of userUserId ",setting[0].userId)
    
    if(setting.length > 0) {
      console.log("if")
      await userService.updateSetting(setting[0]._id, setting[0].userId, settings)
    } else {
      console.log("save")
      await userService.saveSetting(settings)
    }
    return res.status(200).json({ message: `Successfully ${setting.length > 0 ? "Updated!":"Saved!"}`});
  } catch (error) {
    res.status(500).json({ message: error.message, errr: "catch" });
  }
};

module.exports.updateTempSetting = async (req, res) => {
  try {
    const { id, userId } = req.params;
    userService.updateSetting(id, userId, req.body);
    return res.status(200).json({ message: "Successfully saved!"});
  } catch (error) {
    res.status(500).json({ message: error.message, errr: "catch" });
  }
};

module.exports.shareVideoInEmail = async (req, res) => {
  try {
    const {senderEmail, email, videoThumnail, videoLink } = req.body;
    const mail = await helpers.shareVideoInEmail(senderEmail,email, videoThumnail, videoLink);
    
    //const gifFromVideo = gifService.saveGif(videoThumnail)
    //console.log("gifFromVideo", gifFromVideo)
    if(mail){
      return res.status(200).json({ message: "Video shared successfully"});
    }else{
      return res.status(200).json({ message: "Some Error occured while sharing video"});
    }
  } catch (error) {
    res.status(500).json({ message: error.message, errr: "Error" });
  }
};


module.exports.getTempSetting = async (req, res) => {
  try {
    const { id } = req.params;
    var settings = await userService.getSettingsByUserID(id);
    return res.status(200).json({ message: "Successfull!", settings: settings || [] });
  } catch (error) {
    res.status(500).json({ message: error.message, errr: "catch" });
  }
};

module.exports.getPreview = async (req, res) => {
  try {
    const { colors, logoUrl, text, name } = req.body.settings;
    let template = "";
    if(name === "Spread") {
      console.log("Spread", text,name)
      template = await Templates.spreadTheme(false,false, logoUrl, text);
    }
    if(name === "Corporate Light") {
      // console.log("Corporate Light")
      template = await Templates.corporateLight(false,false, logoUrl, text);
    }
    if(name === "Modern Simple") {
      // console.log("Modern Simple")
      template = await Templates.modernSimple(false,false, logoUrl, text);
    }
    if(name === "Streamlined") {
      // console.log("Streamlined")
      template = await Templates.streamlined(false,false, logoUrl, text);
    }
    if(name === "Simple Blue") {
      // console.log("Simple Blue")
      template = await Templates.simple_blue(false,false, logoUrl, text);
    }
    if(name === "Sleek") {
      // console.log("Sleek")
      template = await Templates.sleek(false,false, logoUrl, text);
    }
    if(name === "Social Business") {
      // console.log("Social Business")
      template = await Templates.social_business(false,false, logoUrl, text);
    }
    if(name === "Social Impact") {
      // console.log("Social Impact")
      template = await Templates.social_impact(false,false, logoUrl, text);
    }
    if(name === "Clasic Dark") {
      // console.log("Clasic Dark")
      template = await Templates.classic_dark(false,false, logoUrl, text);
    }
    if(name === "Ocean") {
      // console.log("Ocean")
      template = await Templates.ocean(false,false, logoUrl, text);
    }
    return res.status(200).json({ message: "Success", template})
  } catch (error) {
    res.status(500).json({ message: error.message, errr: "catch" });
  }
}
