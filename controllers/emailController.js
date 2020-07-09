const url = require("url");
const axios = require("axios");
const decodeToken = require("jsontokens").decodeToken;
const { google } = require("googleapis");
const template = require("../helpers/template");
const emailService = require("../services/emailService");
const videoService = require("../services/videoService");
require("dotenv").config();

module.exports.sendWithGmail = async (req, res) => {
  const { userId, recieverEmail, videoId } = req.body;
  try {
    const tokenObjects = await emailService.findUserTokenObj(userId);
    const singleTokenObj = tokenObjects[0].tokenObj;
    const fromEmail = tokenObjects[0].userEmail;
    const video = await videoService.findVideoById(videoId);
    const { thumbnail } = video;
    var templateString = await template.generateStringTemplate(
      videoId,
      thumbnail
    );
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
        "video from vidionPro",
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
  } catch (error) {
    console.log("error", error);
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

  var encodedMail = new Buffer(str)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
  return encodedMail;
}
