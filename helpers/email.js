const nodemailer = require("nodemailer");
require("dotenv").config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: `${process.env.FROM_EMAIL}`,
    pass: `${process.env.EMAIL_PASSWORD}`
  }
});
const sendEmail = async (url, recieverEmail) => {
  const mailOptions = {
    to: recieverEmail,
    from: process.env.FROM_EMAIL,
    subject: "Video Url",
    html: `<p>Hi This is The Video ${url}  code\n 
                Please Click the Code and Check </p>  `
  };
  try {
    const response = await transporter.sendMail(mailOptions);
    return response;
  } catch (err) {
    return false;
  }
};

module.exports = {
  sendEmail
};
