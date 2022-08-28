const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
const fileUpload = require("express-fileupload");
// const mongoose = require("mongoose");
const cors = require("cors");
const user = require("./routes/user");
const videos = require("./routes/videos");
const contact = require("./routes/contact");
const email = require("./routes/email");
const asset = require("./routes/asset");
const campaign = require("./routes/campaign");
const industry = require("./routes/industry");
const chatvids = require("./routes/chatvid");
require("dotenv").config();

const app = express();

// mongoose.connect(`${process.env.MONGO_DB}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: false,
//     useFindAndModify: false
//   }
// ).then(
//   () => { console.log("DB Connected") },
//   err => { console.error(err) }
// );

app.use(cors());
app.use(express.json());
app.use(
  fileUpload({ useTempFiles: true, tempFileDir: path.join(__dirname, "temp") })
);

app.use("/user", user);
app.use("/video", videos);
app.use("/contact", contact);
app.use("/email", email);
app.use("/asset", asset);
app.use("/campaign", campaign);
app.use("/industry", industry);
app.use("/chatvid", chatvids);

app.get("/", (req, res) => {
  res.send("Root place");
});

module.exports.handler = serverless(app);
