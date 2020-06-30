const fs = require("fs");

const token =
  "ya29.a0AfH6SMBOV1W01zUT1xhBS4raTGHVLmDHQkFkZdsyWAftniiXwBaxaBLar8PNBPkYn3XAQwg_GXyQuzeeW4LR7l1FJ7y2LkG_uC90SpRrkkNDV5GXenttSh7Ixlm0FBhhSIeHbkG_GIq7A6tAIcCmZlo30GY6kW37YNs";
const { google } = require("googleapis");

sendWithGmail = async () => {
  try {
    fs.readFile("config.gmail.json", function processClientSecrets(
      err,
      content
    ) {
      if (err) {
        console.log("Error loading client secret file: " + err);
        return;
      }
      // Authorize a client with the loaded credentials, then call the
      // Gmail API.
      authorize(JSON.parse(content), sendMessage);
    });
  } catch (error) {
    console.log("error", error);
  }
};
function authorize(credentials, callback) {
  const { client_secret, client_id } = credentials;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret);
  oAuth2Client.setCredentials({ access_token: token });
  callback(oAuth2Client);
  // Check if we have previously stored a token.
  //   fs.readFile(TOKEN_PATH, (err, token) => {
  //     // if (err) return getNewToken(oAuth2Client, callback);

  //   });
}

function sendMessage(auth) {
  var raw = makeBody(
    "iasadsherazi@gmail.com",
    "iasadsherazi@gmail.com",
    "hi there",
    "<div><p>Hi there</p><h2>Hello</h2></div>"
  );
  const gmail = google.gmail({ version: "v1", auth });
  gmail.users.messages.send(
    {
      auth: auth,
      userId: "me",
      resource: {
        raw: raw
      }
    },
    function(err, response) {
      console.log("error", err);
      console.log("response", response);
      return err || response;
    }
  );
}
function makeBody(to, from, subject, message) {
  var str = [
    'Content-Type: text/plain; charset="UTF-8"\n',
    "MIME-Version: 1.0\n",
    "Content-Transfer-Encoding: 7bit\n",
    "to: ",
    to,
    "\n",
    "from: ",
    from,
    "\n",
    "subject: ",
    subject,
    "\n\n",
    message
  ].join("");

  var encodedMail = new Buffer(str)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
  return encodedMail;
}

sendWithGmail();
