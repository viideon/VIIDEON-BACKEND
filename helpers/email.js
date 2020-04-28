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
const sendEmail = async (id, recieverEmail) => {
  try {
    const mailOptions = {
      to: recieverEmail,
      from: process.env.FROM_EMAIL,
      subject: "Video For Vidion Pro",
      template: "campaign",
      context: {
        id: id
      }
    };
    const response = await transporter.sendMail(mailOptions);
    return response;
  } catch (err) {
    console.log("err", err);
    return false;
  }
};

module.exports = {
  sendEmail
};
