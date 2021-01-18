const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: `${process.env.FROM_EMAIL}`,
    pass: `${process.env.EMAIL_PASSWORD}`
  }
});
const sendEmail = async (user, req, res) => {
  const token = user.generateVerificationToken();
  const mailOptions = {
    to: user.email,
    from: `videonPro<${process.env.FROM_EMAIL}>`,
    subject: "Account Verification",
    text: `Hi ${user.firstName} ${user.lastName} \n 
                Please click on this link to verify your email  ${process.env.APP_DOMAIN}/login/VerifyEmail?code=${token.token} . \n\n`
  };
  try {
    const tokenSaved = await token.save();
    if (!tokenSaved) {
      return false;
    }
    await transporter.sendMail(mailOptions);
    return true;
  } catch (err) {
    return false;
  }
};

const sendForGotEmail = async (user, token) => {
  console.log(process.env.FROM_EMAIL)
  const mailOptions = {
    to: user.email,
    from: `videonPro<${process.env.FROM_EMAIL}>`,
    subject: "Reset password link",
    html: `<p>You are receiving this because you (or someone else) have requested to reset  the password for your account.\n\n Please click on the following link, or paste this into your browser to complete the process:\n\n
        <a href="${process.env.APP_DOMAIN}/resetpassword?code=${token.token}">${process.env.APP_DOMAIN}/resetpassword?code=${token.token}</a> \n\n If you did not request this, please ignore this email and your password will remain unchanged.\n </p>`
  };
  try {
    const tokenSaved = await token.save();
    if (!tokenSaved) {
      return false;
    }
    await transporter.sendMail(mailOptions);
    return true;
  } catch (err) {
    return false;
  }
};


const shareVideoInEmail = async (senderEmail,email, videoThumnail, videoLink) => {
  try {
    console.log("sender Email",process.env.FROM_EMAIL,process.env.EMAIL_PASSWORD,"receiver mail" ,email)
    const mailOptions = {
  //    from: "asfi.official@gmail.com",
      to: email,
      from: `videonPro<${process.env.FROM_EMAIL}>`,
      subject: "New Chatvid",
      html: `<a href="${videoLink}" target="_blank"><img src="${videoThumnail}" alt="New Chatvid"  width=250/>
      </a>`,
    };
    const response = await transporter.sendMail(mailOptions);
    return true;
  } catch (err) {
    return false;
  }


};

const responseEmail = async (email,logo) => {
  const mailOptions = {
    to: email,
    from: `videonPro<${process.env.FROM_EMAIL}>`,
    subject: "Thank you for using Viideon's ChatVid to respond ",
    html: `<div style="display: flex;">
    <div style="margin-right: 30px;">
  <img
    src="https://videonpro.s3.us-west-1.amazonaws.com/1610954110203logo.jpeg"
    alt="logo"
    width="100"
    height="62px"
    style="margin-top: 28px;"
  /></div>
  <div>
  <h2>
  Thank you for using Viideon's ChatVid to respond to a message from our member.

  </h2>
 <h2> Consider joining Viideon by creating your own account! It's easy
  <a href="https://viideon.com/" target="_blank">FIND OUT MORE! </a></h2>
</div>
</div>
`
  }
  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (err) {
    return false;
  }
};




const sendResetEmail = async (user, req, res) => {
  const mailOptions = {
    to: user.email,
    from: `videonPro<${process.env.FROM_EMAIL}>`,
    subject: "Your password has been changed",
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
  sendResetEmail,
  shareVideoInEmail,
  responseEmail
};
