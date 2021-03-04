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
        // "ehtisham.asghar.pak@gmail.com",
        fromEmail,
        "video from videonPro",
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
    console.log("error", error);
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

    //find video by video id
    const video = await videoService.findVideoById(videoId);
    const { thumbnail, eMailTemplate } = video;
    // console.log("emailvidthumb",thumbnail)

    // find user by user id
    const user = await userService.getUserById(userId);
    const { userName, url } = user;
    // console.log("userName for video template",userName)
    // console.log("user avatar",userName)

    if (eMailTemplate) themeName = eMailTemplate;
    let settings = { colors: {}, logoUrl: false, text: false };
    console.log("them is ", themeName, userId);
    if (themeName) {
      settings = await userService.getSetttingByUserIDAndName(
        userId,
        themeName
      );
    }
    let templateString;
    console.log("setting length ", settings);
    console.log("in video send just id", videoId);
    if (settings.length === 0 || !themeName) {
      if (themeName === "Spread") {
        console.log("Spread in show preview");

        templateString = await template.spreadTheme(
          videoId,
          thumbnail,
          false,
          false,
          userName,
          url,
          false,
          false,
          false,
          false
        );
      }
      if (themeName === "Corporate Light") {
        console.log("Corporate Light");
        templateString = await template.corporateLight(
          videoId,
          thumbnail,
          false,
          false,
          userName,
          url,
          false,
          false,
          false,
          false
        );
      }
      // UI bad
      if (themeName === "Modern Simple") {
        console.log("Modern Simple");
        templateString = await template.modernSimple(
          videoId,
          thumbnail,
          false,
          false,
          userName,
          url,
          false,
          false,
          false,
          false
        );
      }
      if (themeName === "Streamlined") {
        console.log(" is Streamlined", thumbnail);
        templateString = await template.streamlined(
          videoId,
          thumbnail,
          false,
          false,
          userName,
          url,
          false,
          false,
          false,
          false
        );
      }
      if (themeName === "Simple Blue") {
        console.log("Simple Blue");
        templateString = await template.simple_blue(
          videoId,
          thumbnail,
          false,
          false,
          userName,
          url,
          false,
          false,
          false,
          false
        );
      }
      if (themeName === "Sleek") {
        console.log("Sleek is here");
        templateString = await template.sleek(
          videoId,
          thumbnail,
          false,
          false,
          userName,
          url,
          false,
          false,
          false,
          false
        );
      }
      if (themeName === "Social Business") {
        console.log("Social Business");
        templateString = await template.social_business(
          videoId,
          thumbnail,
          false,
          false,
          userName,
          url,
          false,
          false,
          false,
          false
        );
      }
      if (themeName === "Social Impact") {
        console.log("Social Impact");
        templateString = await template.social_impact(
          videoId,
          thumbnail,
          false,
          false,
          userName,
          url,
          false,
          false,
          false,
          false
        );
      }
      if (themeName === "Clasic Dark") {
        console.log("Clasic Dark");
        templateString = await template.classic_dark(
          videoId,
          thumbnail,
          false,
          false,
          userName,
          url,
          false,
          false,
          false,
          false
        );
      }
      if (themeName === "Ocean") {
        console.log("Ocean");
        templateString = await template.ocean(
          videoId,
          thumbnail,
          false,
          false,
          userName,
          url,
          false,
          false,
          false,
          false
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
        var raw = await makeBody(
          recieverEmail,
          fromEmail,
          "video from videonPro",
          templateString
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
    } else {
      console.log("in else setings in mail", settings);
      let {
        logoUrl,
        fbUrl,
        text,
        twitterUrl,
        youtubeUrl,
        linkedinUrl,
      } = settings[0];

      var emailList = recieverEmail.split(",");
      await incrementVideoEmail(videoId, emailList.length);
      templateString = await template.generateStringTemplate(
        videoId,
        thumbnail
      );
      if (themeName === "Spread") {
        console.log("Spread in email send");

        templateString = await template.spreadTheme(
          videoId,
          thumbnail,
          logoUrl,
          text,
          userName,
          url,
          fbUrl,
          twitterUrl,
          youtubeUrl,
          linkedinUrl
        );
      }
      if (themeName === "Corporate Light") {
        console.log("Corporate Light");
        templateString = await template.corporateLight(
          videoId,
          thumbnail,
          settings.logoUrl,
          settings.text,
          userName,
          url
        );
      }
      // UI bad
      if (themeName === "Modern Simple") {
        console.log("Modern Simple");
        templateString = await template.modernSimple(
          videoId,
          thumbnail,
          settings.logoUrl,
          settings.text
        );
      }
      if (themeName === "Streamlined") {
        console.log("Streamlined");
        templateString = await template.streamlined(
          videoId,
          thumbnail,
          settings.logoUrl,
          settings.text,
          userName,
          url
        );
      }
      if (themeName === "Simple Blue") {
        console.log("Simple Blue");
        templateString = await template.simple_blue(
          videoId,
          thumbnail,
          settings.logoUrl,
          settings.text,
          userName,
          url
        );
      }
      if (themeName === "Sleek") {
        console.log("Sleek");
        templateString = await template.sleek(
          videoId,
          thumbnail,
          settings.logoUrl,
          settings.text,
          userName,
          url
        );
      }
      if (themeName === "Social Business") {
        console.log("Social Business");
        templateString = await template.social_business(
          videoId,
          thumbnail,
          settings.logoUrl,
          settings.text,
          userName,
          url
        );
      }
      if (themeName === "Social Impact") {
        console.log("Social Impact");
        templateString = await template.social_impact(
          videoId,
          thumbnail,
          settings.logoUrl,
          settings.text,
          userName,
          url
        );
      }
      if (themeName === "Clasic Dark") {
        console.log("Clasic Dark");
        templateString = await template.classic_dark(
          videoId,
          thumbnail,
          settings.logoUrl,
          settings.text
        );
      }
      if (themeName === "Ocean") {
        console.log("Ocean");
        templateString = await template.ocean(
          videoId,
          thumbnail,
          settings.logoUrl,
          settings.text
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

      // send direct email video
      // console.log("sending video to brodcast",recieverEmail)
      // const result = await sendVideoEmail(recieverEmail, templateString);
      // console.log("result is ", result);
      // if (result.error || result === false) {
      //   return res.status(400).json({ message: "fail to send email" });
      // } else {
      //   return res.status(200).json({ message: "email sent sucessfully" });
      //   console.log("vid sent successfully");
      // }
      //End send direct email video

      async function sendMessage(auth) {
        var raw = await makeBody(
          recieverEmail,
          fromEmail,
          "video from videonPro",
          templateString
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
    // console.log("user email params",params)
    // till here working  fine
    const response = await axios.post(
      `${process.env.TOKEN_OBJECT_PATH}`,
      params.toString()
    );
    console.log("user email response", response);
    const tokenObj = response.data;
    const userEmail = await decodeJwtToEmail(tokenObj.id_token);
    console.log("user email", userEmail);
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
    // console.log("error is",error)
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
    console.log("error", error.message);
    res.status(400).json({ message: error.message });
  }
};
function decodeJwtToEmail(idToken) {
  const tokenData = decodeToken(idToken);
  return tokenData.payload.email;
}
function makeBody(recieverEmail, from, subject, message) {
  // console.log(typeof messaage);

  var str = [
    'Content-Type: text/html; charset="UTF-8"\n',
    "MIME-Version: 1.0\n",
    "Content-Transfer-Encoding: 7bit\n",
    "bcc: ",
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
