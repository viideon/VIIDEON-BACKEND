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
    // if (
    //   singleTokenObj === undefined ||
    //   fromEmail === undefined ||
    //   fromEmail === ""
    // ) {
    //   return res.status(400).json({
    //     messaage: "no user data present please authorize your account"
    //   });
    // }
    const video = await videoService.findVideoById(videoId);
    const { thumbnail } = video;
    var templateString = await template.generateStringTemplate(
      videoId,
      thumbnail
    );
    authorize(sendMessage);
    function authorize(callback) {
      // const { client_secret, client_id } = credentials;
      const oAuth2Client = new google.auth.OAuth2(
        `${process.env.CLIENT_ID}`,
        `${process.env.CLIENT_SECRET}`
      );
      oAuth2Client.setCredentials(singleTokenObj);
      callback(oAuth2Client);
    }

    // console.log(templateString);
    async function sendMessage(auth) {
      var raw = await makeBody(
        fromEmail,
        recieverEmail,
        "video from vidionPro",
        templateString
      );
      const gmail = google.gmail({ version: "v1", auth });
      gmail.users.messages.send(
        {
          auth: auth,
          userId: "me",
          resource: {
            raw: raw
          }
        },
        function(err, response) {
          if (err) {
            return res.status(400).json({
              messaage: "failed,server error"
            });
          }
          if (response) {
            return res.status(200).json({
              message: "email sent"
            });
          }
        }
      );
    }
  } catch (error) {
    console.log("error", error);
    res.status(400).json({
      error: error.message
    });
  }
};

module.exports.getAndSaveConfig = async (req, res) => {
  const { code, userId } = req.body;
  if (code === "") {
    return res.status(400).json({
      error: "include authorization code"
    });
  }
  try {
    const params = new url.URLSearchParams({
      code: code,
      client_id: `${process.env.CLIENT_ID}`,
      client_secret: `${process.env.CLIENT_SECRET}`,
      grant_type: "authorization_code",
      redirect_uri: "postmessage"
    });
    const response = await axios.post(
      `${process.env.TOKEN_OBJECT_PATH}`,
      params.toString()
    );

    const tokenObj = response.data;
    const userEmail = await decodeJwtToEmail(tokenObj.id_token);
    console.log("user email", userEmail);
    const result = await emailService.saveEmailConfig({
      userId,
      userEmail,
      tokenObj
    });

    if (result) {
      res.status(201).json({
        message: "configuration created",
        emailConfig: result
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};
module.exports.getUserEmailConfig = async (req, res) => {
  let userId = req.query.userId;
  try {
    const result = await emailService.findUserConfig(userId);
    res.status(200).json({
      configurations: result
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};
function decodeJwtToEmail(idToken) {
  const tokenData = decodeToken(idToken);
  return tokenData.payload.email;
}
function makeBody(recieverEmail, from, subject, message) {
  console.log(typeof messaage);

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
    message
  ].join("");

  var encodedMail = new Buffer(str)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
  return encodedMail;
}
// const oauth2Client = new OAuth2(
//   `${process.env.CLIENT_ID}`,
//   `${process.env.CLIENT_SECRET}`,
//   "https://developers.google.com/oauthplayground"
// );
// console.log("single token obj", singleTokenObj.refresh_token);
// oauth2Client.setCredentials({
//   refresh_token: singleTokenObj.refresh_token
// });
// const accessToken = await oauth2Client.getAccessToken();
// console.log("acess token", accessToken);
// let transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     type: "OAuth2",
//     clientId: `${process.env.CLIENT_ID}`,
//     clientSecret: `${process.env.CLIENT_SECRET}`
//   }
// });

// const response = await transporter.sendMail({
//   from: "iasadsherazi@gmail.com",
//   to: "basitdev850@gmail.com",
//   subject: "Message",
//   text: "I hope this message gets through!",
//   auth: {
//     user: "iasadsherazi@gmail.com",
//     accessToken: singleTokenObj.access_token,
//     refreshToken: singleTokenObj.refresh_token,
//     expires: singleTokenObj.expires
//   }
// });
// console.log("response", response);
// if (response) {
//   res.status(200).json({
//     message: "email sent"
//   });
// }
// fs.readFile("config.gmail.json", function processClientSecrets(
//   err,
//   content
// ) {
//   if (err) {
//     console.log("Error loading client secret file: " + err);
//     return res.status(400).json({
//       message: "server error"
//     });
//   }
//   // Authorize a client with the loaded credentials, then call the
//   // Gmail API.

// });
