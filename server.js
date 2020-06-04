const express = require("express");
// const ffmpeg = require("fluent-ffmpeg");
// const pathToFfmpeg = require("ffmpeg-static");
// const ffprobe = require("ffprobe-static");
const path = require("path");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const cors = require("cors");
const user = require("./routes/user");
const videos = require("./routes/videos");
const contact = require("./routes/contact");
// const edit = require("./routes/edit");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 3008;

mongoose.connect(
  `${process.env.MONGOO_DB}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: false,
    useFindAndModify: false
  },
  () => {
    console.log("connected to db");
  }
);

app.use(cors());
app.use(express.json());
app.use(
  fileUpload({ useTempFiles: true, tempFileDir: path.join(__dirname, "temp") })
);

//configure ffmpeg
// ffmpeg.setFfmpegPath("ffmpeg");
// ffmpeg.setFfmpegPath("D:/ff/bin/ffmpeg.exe");
// ffmpeg.setFfmpegPath(pathToFfmpeg);
// ffmpeg.setFfprobePath(ffprobe.path);
// console.log(pathToFfmpeg);

//routes

app.use("/user", user);
app.use("/video", videos);
app.use("/contact", contact);
// app.use("/edit", edit);

app.get("/", (req, res) => {
  res.send("Root place");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
