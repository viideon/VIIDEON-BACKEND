const { sendEmail, sendForGotEmail, sendResetEmail, shareVideoInEmail,responseEmail } = require("./email");
const helpers = {
  sendEmail,
  sendForGotEmail,
  sendResetEmail,
  shareVideoInEmail,
  responseEmail
};
module.exports = {
  helpers,
};
