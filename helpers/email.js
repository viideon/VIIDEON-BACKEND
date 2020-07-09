const nodemailer = require("nodemailer");
// const hbs = require("nodemailer-express-handlebars");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: `${process.env.FROM_EMAIL}`,
    pass: `${process.env.EMAIL_PASSWORD}`
  }
});
// const handlebarOptions = {
//   viewEngine: {
//     extName: ".hbs",
//     partialsDir: "template",
//     layoutsDir: "template",
//     defaultLayout: "campaign.hbs",
//   },
//   viewPath: "template",
//   extName: ".hbs",
// };
// transporter.use("compile", hbs(handlebarOptions));
// const sendEmail = async (id, recieverEmail, thumbnail) => {
//   try {
//     // console.log("from email", fromEmail);
//     const mailOptions = {
//       to: recieverEmail,
//       sender: "asad<iasadsherazi@gmail.com>",
//       subject: "Video From VidionPro",
//       template: "campaign",
//       context: {
//         id: id,
//         thumbnail: thumbnail,
//       },
//     };
//     const response = await transporter.sendMail(mailOptions);
//     console.log("response", response);
//     return response;
//   } catch (err) {
//     console.log("err", err);
//     return false;
//   }
// };
const sendEmail = async (user, req, res) => {
  const token = user.generateVerificationToken();
  const mailOptions = {
    to: user.email,
    from: process.env.FROM_EMAIL,
    subject: "Account Verification Code",
    text: `Hi ${user.email} \n 
                Please visit this link to verify your email this code https://vidionpro.000webhostapp.com/login/VerifyEmail?code=${token.token} . \n\n`
  };
  try {
    const tokenSaved = await token.save();
    if (!tokenSaved) {
      return false;
      // return res.status(500).json({ message: err.message });
    }
    await transporter.sendMail(mailOptions);
    res.status(201).json({
      success: true,
      message: " A verification email has been sent.",
      user: user
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
    // return res.status(500).json({ message: err.message });
  }
};

const sendForGotEmail = async (user, token, req, res) => {
  const mailOptions = {
    to: user.email,
    from: process.env.FROM_EMAIL,
    subject: "Reset password link",
    text: "Some useless text",
    html: `<p>You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n Please click on the following link, or paste this into your browser to complete the process:\n\n
        <a href="https://vidionpro.000webhostapp.com/resetpassword?code=${token.token}">https://vidionpro.000webhostapp.com/resetpassword?code=${token.token}</a> \n\n If you did not request this, please ignore this email and your password will remain unchanged.\n </p>`
  };
  try {
    const tokenSaved = await token.save();
    if (!tokenSaved) {
      return false;
    }
    await transporter.sendMail(mailOptions);
    return res.status(201).json({
      success: true,
      message: " A verification email has been sent.",
      user: user
    });
  } catch (err) {
    console.log(err);
    return false;
  }
};

const sendResetEmail = async (user, req, res) => {
  const mailOptions = {
    to: user.email,
    from: process.env.FROM_EMAIL,
    subject: "Your password has been changed",
    text: "Some useless text",
    html: `<p>This is a confirmation that the password for your account ${user.email} has just been changed. </p>`
  };
  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = {
  sendEmail,
  sendForGotEmail,
  sendResetEmail
};
