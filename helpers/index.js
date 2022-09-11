const { sendEmail, sendForgotEmail, sendResetEmail, shareVideoInEmail,responseEmail } = require("./email");
const helpers = {
  sendEmail,
  sendForgotEmail,
  sendResetEmail,
  shareVideoInEmail,
  responseEmail
};
module.exports = {
  helpers,
};
