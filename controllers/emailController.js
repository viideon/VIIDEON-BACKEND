const url = require("url");
const axios = require("axios");
const decodeToken = require("jsontokens").decodeToken;
const { google } = require("googleapis");
const template = require("../helpers/template");
const { sendVideoEmail } = require("../helpers/email");
const emailService = require("../services/emailService");
const userService = require("../services/userService");
const { incrementVideoEmail } = require("../services/videoService");
const videoService = require("../services/videoService");
require("dotenv").config();

module.exports.sendTemplateWithGmail = async (req, res) => {
  const { userId, recieverEmail, videoId } = req.body;
  try {
    const tokenObjects = await emailService.findUserTokenObj(
      "5f5b61ccdd828c1f7f11c09a"
    );
    const singleTokenObj = tokenObjects[0].tokenObj;
    const fromEmail = tokenObjects[0].userEmail;
    const video = await videoService.findVideoById(videoId);
    const { thumbnail } = video;

    const headerImage = require("../template/spreadHeader.jpg");
    const logo = require("../template/logo.png");
    const customTemplate = await template.spreadTheme();

    authorize(sendMessage);
    function authorize(callback) {
      const oAuth2Client = new google.auth.OAuth2(
        `${process.env.CLIENT_ID}`,
        `${process.env.CLIENT_SECRET}`
      );
      oAuth2Client.setCredentials(singleTokenObj);
      callback(oAuth2Client);
    }
    async function sendMessage(auth) {
      var raw = await makeBody(
        "hafiz.quraishi.official@gmail.com",
       
        fromEmail,
        "video from viideon",
        customTemplate
      );
      const gmail = google.gmail({ version: "v1", auth });
      gmail.users.messages.send(
        {
          auth: auth,
          userId: "me",
          resource: {
            raw: raw,
          },
        },
        function (err, response) {
          if (err) {
            return res.status(400).json({
              messaage: "failed,server error",
            });
          }
          if (response) {
            return res.status(200).json({
              message: "email sent",
            });
          }
        }
      );
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports.sendWithGmail = async (req, res) => {
  const { userId, recieverEmail, videoId } = req.body;
  let themeName = req.body.themeName;
  try {
    const tokenObjects = await emailService.findUserTokenObj(userId);
    const singleTokenObj = tokenObjects[0].tokenObj;
    const fromEmail = tokenObjects[0].userEmail;

    const video = await videoService.findVideoById(videoId);
    const { thumbnail, eMailTemplate, title, description } = video;

    const user = await userService.getUserById(userId);
    const { userName, url, email, mobileNumber, businessPhone, webAddress, facebookAddress, twitterAddress, youtubeAddress, linkedinAddress, address  } = user;
    
    if (eMailTemplate) themeName = eMailTemplate;
    
    if (themeName) {
      settings = await userService.getSetttingByUserIDAndName(
        userId,
        themeName
      );
    }
    let templateString;

    if (themeName === undefined) {

      templateString = await template.sleek2(
        videoId,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      );
    }
    if (themeName === "Spread") {
      templateString = await template.spreadTheme(
        videoId,
        thumbnail,
        title,
        description,
        false,
        false,
        userName,
        url,
        facebookAddress,
        twitterAddress,
        youtubeAddress,
        linkedinAddress,
        mobileNumber,
        businessPhone,
        email,
        webAddress,
        address
      );
    }
    if (themeName === "Corporate Light") {
      templateString = await template.corporateLight(
        videoId,
        thumbnail,
        title,
        description,
        false,
        false,
        userName,
        url,
        facebookAddress,
        twitterAddress,
        youtubeAddress,
        linkedinAddress,
        mobileNumber,
        businessPhone,
        email,
        webAddress,
        address
      );
    }
    
    if (themeName === "Modern Simple") {
      templateString = await template.modernSimple(
        videoId,
        thumbnail,
        title,
        description,
        false,
        false,
        userName,
        url,
        facebookAddress,
        twitterAddress,
        youtubeAddress,
        linkedinAddress,
        mobileNumber,
        businessPhone,
        email,
        webAddress,
        address
      );
    }
    if (themeName === "Streamlined") {
      templateString = await template.streamlined(
        videoId,
        thumbnail,
        title,
        description,
        false,
        false,
        userName,
        url,
        facebookAddress,
        twitterAddress,
        youtubeAddress,
        linkedinAddress,
        mobileNumber,
        businessPhone,
        email,
        webAddress,
        address
      );
    }
    if (themeName === "Simple Blue") {
      templateString = await template.simple_blue(
        videoId,
        thumbnail,
        title,
        description,
        false,
        false,
        userName,
        url,
        facebookAddress,
        twitterAddress,
        youtubeAddress,
        linkedinAddress,
        mobileNumber,
        businessPhone,
        email,
        webAddress,
        address
      );
    }
    if (themeName === "Sleek") {
      templateString = await template.sleek(
        videoId,
        thumbnail,
        title,
        description,
        false,
        false,
        userName,
        url,
        facebookAddress,
        twitterAddress,
        youtubeAddress,
        linkedinAddress,
        mobileNumber,
        businessPhone,
        email,
        webAddress,
        address
      );
    }
    if (themeName === "Social Business") {
      templateString = await template.social_business(
        videoId,
        thumbnail,
        title,
        description,
        false,
        false,
        userName,
        url,
        facebookAddress,
        twitterAddress,
        youtubeAddress,
        linkedinAddress,
        mobileNumber,
        businessPhone,
        email,
        webAddress,
        address
      );
    }
    if (themeName === "Social Impact") {
      templateString = await template.social_impact(
        videoId,
        thumbnail,
        title,
        description,
        false,
        false,
        userName,
        url,
        facebookAddress,
        twitterAddress,
        youtubeAddress,
        linkedinAddress,
        mobileNumber,
        businessPhone,
        email,
        webAddress,
        address
      );
    }
    if (themeName === "Clasic Dark") {
      templateString = await template.classic_dark(
        videoId,
        thumbnail,
        title,
        description,
        false,
        false,
        userName,
        url,
        facebookAddress,
        twitterAddress,
        youtubeAddress,
        linkedinAddress,
        mobileNumber,
        businessPhone,
        email,
        webAddress,
        address
      );
    }
    if (themeName === "Ocean") {
      templateString = await template.ocean(
        videoId,
        thumbnail,
        title,
        description,
        false,
        false,
        userName,
        url,
        facebookAddress,
        twitterAddress,
        youtubeAddress,
        linkedinAddress,
        mobileNumber,
        businessPhone,
        email,
        webAddress,
        address
      );
    }
    authorize(sendMessage);
    function authorize(callback) {
      const oAuth2Client = new google.auth.OAuth2(
        `${process.env.CLIENT_ID}`,
        `${process.env.CLIENT_SECRET}`
      );
      oAuth2Client.setCredentials(singleTokenObj);
      callback(oAuth2Client);
    }
    async function sendMessage(auth) {
      var receiverEmails = recieverEmail.split(",");
      const gmail = google.gmail({ version: "v1", auth });

      const emailPromises = []

      console.log(emailPromises);
      
      receiverEmails.forEach(receiverEmail => {
        var raw = makeBody(
          receiverEmail,
          fromEmail,
          "message from viideon member",
          templateString
        );
        
        emailPromises.push(gmail.users.messages.send(
          {
            auth: auth,
            userId: "me",
            resource: {
              raw: raw,
            },
          }
        ));
      });

      await Promise.all(emailPromises).then(data => {
        console.log('start');
        console.log('length: ' + data.length);
        console.log(data);
        console.log('end');
        return res.status(200).json({
          message: "email sent"
        });
      }).catch(error => {
        console.log(error);
        return res.status(400).json({
          messaage: "failed,server error"
        });
      })
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports.getAndSaveConfig = async (req, res) => {
  const { code, userId } = req.body;

  if (code === "") {
    return res.status(400).json({
      error: "include authorization code",
    });
  }
  try {
    const params = new url.URLSearchParams({
      code: code,
      client_id: `${process.env.CLIENT_ID}`,
      client_secret: `${process.env.CLIENT_SECRET}`,
      grant_type: "authorization_code",
      redirect_uri: "postmessage",
    });

    const response = await axios.post(
      `${process.env.TOKEN_OBJECT_PATH}`,
      params.toString()
    );
    
    const tokenObj = response.data;
    const userEmail = await decodeJwtToEmail(tokenObj.id_token);
    const result = await emailService.saveEmailConfig({
      userId,
      userEmail,
      tokenObj,
    });

    if (result) {
      res.status(201).json({
        message: "configuration created",
        emailConfig: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
module.exports.getUserEmailConfig = async (req, res) => {
  let userId = req.query.userId;
  try {
    const result = await emailService.findUserConfig(userId);
    res.status(200).json({
      configurations: result,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
module.exports.deleteUserConfig = async (req, res) => {
  let { id } = req.query;
  try {
    const config = await emailService.findEmailConfig(id);
    if (config) {
      await emailService.deleteConfigById(id);
      return res.status(200).json({
        message: "config deleted",
      });
    } else {
      return res.status(400).json({
        message: "No such record found",
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
function decodeJwtToEmail(idToken) {
  const tokenData = decodeToken(idToken);
  return tokenData.payload.email;
}
function makeBody(recieverEmail, from, subject, message) {

  var str = [
    'Content-Type: text/html; charset="UTF-8"\n',
    "MIME-Version: 1.0\n",
    "Content-Transfer-Encoding: 7bit\n",
    "to: ",
    recieverEmail,
    "\n",
    "from: ",
    from,
    "\n",
    "subject: ",
    subject,
    "\n\n",
    message,
  ].join("");

  var encodedMail = new Buffer.from(str)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
  return encodedMail;
}
