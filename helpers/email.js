const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail');
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (user, req, res) => {
  const token = user.generateVerificationToken();
  const msg = {
    to: user.email,
    from: process.env.FROM_EMAIL,
    subject: "Account Verification",
    text: `Hi ${user.firstName} ${user.lastName} \n 
                Please click on this link to verify your email  ${process.env.APP_DOMAIN}/login/VerifyEmail?code=${token.token} . \n\n`,
  };
  try {
    const tokenSaved = await token.save();
    if (!tokenSaved) {
      return false;
    }
    await sgMail.send(msg);
    return true;
  } catch (err) {
    return false;
  }
};

const sendVideoEmail = async (recieverEmail, templateString) => {
  const mailOptions = {
    to: recieverEmail,
    from: `viideon<${process.env.FROM_EMAIL}>`,
    subject: "Video send by Mail ",
    html: templateString,
  };
  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (err) {
    return false;
  }
};

const sendForGotEmail = async (user, token) => {
  const mailOptions = {
    to: user.email,
    from: `viideon<${process.env.FROM_EMAIL}>`,
    subject: "Reset password link",
    html: `<p>You are receiving this because you (or someone else) have requested to reset  the password for your account.\n\n Please click on the following link, or paste this into your browser to complete the process:\n\n
        <a href="${process.env.APP_DOMAIN}/resetpassword?code=${token.token}">${process.env.APP_DOMAIN}/resetpassword?code=${token.token}</a> \n\n If you did not request this, please ignore this email and your password will remain unchanged.\n </p>`,
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

const shareVideoInEmail = async (
  senderEmail,
  email,
  videoThumnail,
  videoLink
) => {
  try {
    console.log(
      "sender Email",
      process.env.FROM_EMAIL,
      process.env.EMAIL_PASSWORD,
      "receiver mail",
      email
    );
    const mailOptions = {
      to: email,
      from: `viideon<${process.env.FROM_EMAIL}>`,
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

const responseEmail = async (email, logo) => {
  const mailOptions = {
    to: email,
    from: `viideon<${process.env.FROM_EMAIL}>`,
    subject: "Thank you for using Viideon's ChatVid to respond ",
    html: `<div style="display: flex;">
    <div style="margin-right: 30px;">
  <img
    src="https://viideon.s3.us-west-1.amazonaws.com/1610954110203logo.jpeg"
    alt="logo"
    style="margin-top: 28px; width: 75px;height: 70px;"
  /></div>
  <div>
  <h2>
  Thank you for using Viideon's ChatVid to respond to a message from our member.

  </h2>
 <h2> Consider joining Viideon by creating your own account! It's easy
  <a href="https://viideon.com/" target="_blank">FIND OUT MORE! </a></h2>
</div>
</div>
`,
  };
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
    from: `viideon<${process.env.FROM_EMAIL}>`,
    subject: "Your password has been changed",
    html: `<p>This is a confirmation that the password for your account ${user.email} has just been changed. </p>`,
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
  sendVideoEmail,
  sendResetEmail,
  shareVideoInEmail,
  responseEmail,
};
