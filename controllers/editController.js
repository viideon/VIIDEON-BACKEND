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
    res.status(400).json({
      error: err
    });
  }
};

module.exports.mergeFile = async (req, res) => {
  res.contentType("video/webm");
  res.attachment("merged.webm");
  let filePath = path.join(__dirname, "..", "temp", "merged.webm");
  let listPath = path.join(__dirname, "..", "temp", "list.txt");
  try {
    const files = req.files;
    await fileUpload(files.one, "temp/one");
    await fileUpload(files.two, "temp/two");

    process.stdout.on("error", function(err) {
      if (err.code == "EPIPE") {
        process.exit(0);
      }
    });

    ffmpeg()
      .input(listPath)
      .inputOptions(["-f concat", "-safe 0"])
      .outputOptions("-c copy")
      .on("error", function(err) {
        res.status(400).json({ message: "failed to merge", error: err });
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
      .save(filePath);
  } catch (err) {
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
    res.status(400).json({
      error: err
    });
  }
};

