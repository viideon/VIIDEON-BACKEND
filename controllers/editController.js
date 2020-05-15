const ffmpeg = require("fluent-ffmpeg");
const path = require("path");
var fs = require("fs");

module.exports.mergeVideos = async (req, res) => {
  res.contentType("video/webm");
  res.attachment("merged.webm");
  let filePath = path.join(__dirname, "..", "temp", "merged.webm");
  try {
    const files = req.files;
    await fileUpload(files.one, "temp/one");
    await fileUpload(files.two, "temp/two");
    console.log("files uploaded");
    ffmpeg()
      .input(path.join(__dirname, "..", "temp/one"))
      .input(path.join(__dirname, "..", "temp/two"))
      .on("error", function(err) {
        res.status(400).json({ message: "failed to merge" });
        res.on("finish", function() {
          try {
            fs.unlinkSync(path.join(__dirname, "..", `temp/one`));
            fs.unlinkSync(path.join(__dirname, "..", `temp/two`));
          } catch (err) {
            console.log("error removing user files");
          }
        });
      })
      .on("end", function() {
        res.sendFile(filePath, function(err) {
          if (err) {
            console.log("error", err);
          } else {
            try {
              fs.unlinkSync(filePath);
              fs.unlinkSync(path.join(__dirname, "..", `temp/one`));
              fs.unlinkSync(path.join(__dirname, "..", `temp/two`));
            } catch (e) {
              console.log("error deleting files", e);
            }
          }
        });
      })
      .mergeToFile("temp/merged.webm", "/temp");
  } catch (err) {
    console.log("error", err);
    res.status(400).json({
      error: err
    });
  }
};

function fileUpload(file, name) {
  return new Promise(function(resolve, reject) {
    file.mv(name, function(err) {
      if (err) reject();
      resolve();
    });
  });
}

module.exports.addMusic = async (req, res, next) => {
  res.contentType("video/webm");
  res.attachment("video.webm");
  let filePath = path.join(__dirname, "..", "temp", "video.webm");
  try {
    const files = req.files;
    files.video.mv("temp/" + "video", function(err) {
      if (err) return res.sendStatus(500).send(err);
    });
    files.audio.mv("temp/" + "audio", function(err) {
      if (err) return res.sendStatus(500).send(err);
    });
    ffmpeg()
      .input("temp/audio")
      .input("temp/video")
      .complexFilter("[0:a][1:a]amerge , pan=stereo|c0<c0+c2|c1<c1+c3[out]")
      .outputOptions(["-map 1:v", "-map [out]", "-c:v copy", "-shortest"])
      .on("error", function(err) {
        console.log("error", err);
        res.status(400).json({ message: "failed to merge" });
        res.on("finish", function() {
          try {
            fs.unlinkSync(path.join(__dirname, "..", `temp/video`));
            fs.unlinkSync(path.join(__dirname, "..", `temp/audio`));
          } catch (err) {
            console.log("error removing user files");
          }
        });
      })
      .on("end", function() {
        res.sendFile(filePath, function(err) {
          if (err) {
            console.log("error", err);
          } else {
            try {
              fs.unlinkSync(filePath);
              fs.unlinkSync(path.join(__dirname, "..", `temp/video`));
              fs.unlinkSync(path.join(__dirname, "..", `temp/audio`));
            } catch (e) {
              console.log("error deleting files", e);
            }
          }
        });
      })
      .saveToFile(filePath);
  } catch (err) {
    console.log("error", err);
    res.status(400).json({
      error: err
    });
  }
};

// ffmpeg("temp/" + req.files.mp4.name)
// .toFormat("mp3")
// .on("end", function() {
//   console.log("done");
// })
// .on("error", function(err) {
//   console.log("error occured", err);
// })
// .pipe(res, { end: true });
