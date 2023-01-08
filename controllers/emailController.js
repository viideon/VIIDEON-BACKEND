const url = require("url");
const axios = require("axios");
const decodeToken = require("jsontokens").decodeToken;
const { google } = require("googleapis");
const template = require("../helpers/template");
const emailService = require("../services/emailService");
const userService = require("../services/userService");
const videoService = require("../services/videoService");
const config = require('../util/config');
const _ = require('lodash');
const {getError} = require('../util/api');
const s3 = require('../util/s3');


const getOwner = async (request) => {
  console.log('getOwner request', {request: request, identity: request.requestContext.identity, cognitoIdentity: request.requestContext.authorizer.iam.cognitoIdentity});
  if (
      !_.has(request, 'requestContext') ||
      !_.has(request.requestContext, 'authorizer') ||
      !_.has(request.requestContext.authorizer, 'iam') ||
      !_.has(request.requestContext.authorizer.iam, 'cognitoIdentity') ||
      !_.has(request.requestContext.authorizer.iam.cognitoIdentity, 'amr') ||
      !_.isArray(request.requestContext.authorizer.iam.cognitoIdentity.amr)
  ) {
    throw getError({ code: 'NotAuthorizedException' });
  }
  let _idParts;
  _.forEach(request.requestContext.authorizer.iam.cognitoIdentity.amr, _amr => {
    if (_.startsWith(_amr, 'cognito-idp.us-east-1.amazonaws.com') && _amr.includes(':CognitoSignIn:')) {
      _idParts = _amr.split(':CognitoSignIn:');
    }
  });

  console.log('ID processed', _idParts);

  if (_.isNil(_idParts)) {
    throw getError({ code: 'NotAuthorizedException' });
  }

  return _idParts[1];
}

module.exports.sendTemplateWithGmail = async (req, res) => {
  const appConfig = await config.getConfig();

  const { videoId } = req.body;
  try {
    const tokenObjects = await emailService.findUserTokenObj(
      "5f5b61ccdd828c1f7f11c09a"
    );
    const singleTokenObj = tokenObjects.tokenObj;
    const fromEmail = tokenObjects.userEmail;
    // const video = await videoService.findVideoById(videoId);
    // const { thumbnail } = video;
    //
    // const headerImage = require("../template/spreadHeader.jpg");
    // const logo = require("../template/logo.png");
    const customTemplate = await template.spreadTheme();

    authorize(sendMessage);
    async function authorize(callback) {
      const oAuth2Client = new google.auth.OAuth2(
        await appConfig.get('CLIENT_ID'),
        await appConfig.get('CLIENT_SECRET')
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
  const appConfig = await config.getConfig();

  try {
    const tokenObjects = await emailService.findUserTokenObj(userId);
    const singleTokenObj = tokenObjects.tokenObj;
    const fromEmail = tokenObjects.userEmail;

    const video = await videoService.findVideoById(videoId);
    const { thumbnail, eMailTemplate, title, description, identityId } = video;
    const _thumbnail = await s3.getRawFromS3(process.env.CLIENT_S3_BUCKET, `protected/${identityId}/${thumbnail}`);
    const _thumbnailBase64 = `data:${_thumbnail.ContentType};base64,${new Buffer(_thumbnail.Body).toString('base64')}`

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
        _thumbnailBase64,
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
        _thumbnailBase64,
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
        _thumbnailBase64,
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
        _thumbnailBase64,
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
        _thumbnailBase64,
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
        _thumbnailBase64,
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
        _thumbnailBase64,
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
        _thumbnailBase64,
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
        _thumbnailBase64,
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
        _thumbnailBase64,
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
    async function authorize(callback) {
      const oAuth2Client = new google.auth.OAuth2(
        await appConfig.get('CLIENT_ID'),
        await appConfig.get('CLIENT_SECRET')
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
        console.error(error);
        return res.status(400).json({
          messaage: "failed,server error"
        });
      })
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports.getAndSaveConfig = async (req, res) => {
  const { code } = req.body;

  console.log('getAndSaveConfig', code, req);

  if (code === "") {
    return res.status(400).json({
      error: "include authorization code",
    });
  }

  try {
    const appConfig = await config.getConfig();
    const _userId = await getOwner(req);
    const params = new url.URLSearchParams({
      code: code,
      client_id: await appConfig.get('CLIENT_ID'),
      client_secret: await appConfig.get('CLIENT_SECRET'),
      grant_type: "authorization_code",
      redirect_uri: "postmessage",
    });

    const response = await axios.post(
      await appConfig.get('TOKEN_OBJECT_PATH'),
      params.toString()
    );
    
    const tokenObj = response.data;
    const userEmail = await decodeJwtToEmail(tokenObj.id_token);
    const result = await emailService.saveEmailConfig({
      userId: _userId,
      userEmail,
      tokenObj,
    });

    console.log('email config created', result);

    if (result) {
      res.status(201).json({
        message: "configuration created",
        emailConfig: result,
      });
    }
  } catch (error) {
    console.log('Error creating config', error);
    console.error(error);
    res.status(400).json({
      error: error.message,
    });
  }
};
module.exports.getUserEmailConfig = async (req, res) => {
  let userId = req.query.userId;
  console.log('getUserEmailConfig userId', userId, req);
  try {
    const _userId = await getOwner(req);
    const result = await emailService.findUserConfig(_userId);
    console.log('User config loaded', result);
    res.status(200).json({
      configurations: result,
    });
  } catch (error) {
    console.error('Error loading config', error);
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

  return new Buffer.from(str)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}
