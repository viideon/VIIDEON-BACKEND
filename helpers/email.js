const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service:'gmail',
    secure:false,
    auth: {
        user: process.env.FROM_EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});
const sendEmail = async (url ,user,req, res) => {
  const mailOptions = {
    to: user.email,
    from: process.env.FROM_EMAIL,
    subject: 'Video Url',
    text: `Hi This is The Video ${url}  code\n 
                Please Click the Code and Check `,
  };
  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "email sent sucessfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

module.exports = {
  sendEmail
};
