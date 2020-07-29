const {
  hashPassword,
  comparePassword,
  generateToken
} = require("./../helpers/helper");
const Token = require("../models/token");
const userService = require("../services/userService");
const { verificationTokenSchema } = require("../schemas/auth");
const { helpers } = require("../helpers");
module.exports.registerUser = async (req, res) => {
  try {
    const { email, firstName, lastName, userName, password } = req.body;
    const person = await userService.findByNameEmail(email, userName);
    if (person && person.email === email) {
      return res
        .status(303)
        .json({ message: "Email address is already registered" });
    }
    // if (person && person.userName === userName)
    //   return res.status(303).json({ message: "Username is already taken" });
    const hash = await hashPassword(password);
    const register = await userService.createNewUser(
      email,
      firstName,
      lastName,
      userName,
      hash
    );
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
    if (!user) return res.status(404).send("Email is not registered!");
    const passwordCheck = await comparePassword(
      req.body.password,
      user.password
    );
    if (!passwordCheck) return res.status(400).send("Password do not match");
    if (!user.isVerified) {
      return res
        .status(410)
        .send({ message: "Email not Verified, Please Verify your email" });
    }
    const token = generateToken(user);
    if (!token) return res.status(500).send("Error in generating token");
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
      res.status(400).json({ message: "Can't update profile" });
      return;
    }
    res.status(201).json({ user: user, message: "Profile Updated" });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(201).json({ user: users });
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
        success: register,
        message: "Verification email has been sent."
      });
    } else {
      return res.status(400).json({
        message: "Email not sent"
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
    if (!user)
      return res.status(400).send({ message: "This email is not valid." });
    const token = user.generateVerificationToken();
    // Send the mail
    const mail = await helpers.sendForGotEmail(user, token);
    if (mail) {
      return res.status(201).json({
        message: "Forgot password link  has been sent to your email."
      });
    } else {
      return res.status(400).json({
        message: "Email not sent"
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
      var newUser = await userService.updatePassword(user._id, hash);
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
