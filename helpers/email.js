const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: `${process.env.FROM_EMAIL}`,
    pass: `${process.env.EMAIL_PASSWORD}`
  }
});
const handlebarOptions = {
  viewEngine: {
    extName: ".hbs",
    partialsDir: "template",
    layoutsDir: "template",
    defaultLayout: "campaign.hbs"
  },
  viewPath: "template",
  extName: ".hbs"
};
transporter.use("compile", hbs(handlebarOptions));
const sendEmail = async (id, recieverEmail, thumbnail) => {
  try {
    // console.log("from email", fromEmail);
    const mailOptions = {
      to: recieverEmail,
      from: `VidionPro`,
      subject: "Video From VidionPro",
      template: "campaign",
      context: {
        id: id,
        thumbnail: thumbnail
      }
    };
    const response = await transporter.sendMail(mailOptions);
    console.log("response", response);
    return response;
  } catch (err) {
    console.log("err", err);
    return false;
  }
};

module.exports = {
  sendEmail
};
