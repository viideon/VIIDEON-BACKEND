const ffmpeg = require("fluent-ffmpeg");
const path = require("path");
var fs = require("fs");

module.exports.mergeVideos = async (req, res) => {
  res.contentType("video/webm");
  res.attachment("merged.webm");
  let filePath = path.join(__dirname, "..", "temp", "merged.webm");
  try {
    const files = req.files;
    files.one.mv("temp/" + "one", function(err) {
      if (err) return res.sendStatus(500).send(err);
    });
    files.two.mv("temp/" + "two", function(err) {
      if (err) return res.sendStatus(500).send(err);
    });

    ffmpeg()
      .input(`temp/one`)
      .input(`temp/two`)
      .on("error", function(err) {
        console.log("An error occurred: " + err.message);
        fs.unlinkSync(path.join(__dirname, "..", `temp/one`));
        fs.unlinkSync(path.join(__dirname, "..", `temp/two`));
        res.status(400).json({ message: "failed to merge" });
      })
      .on("end", function() {
        res.sendFile(filePath);
        // fs.unlinkSync(filePath);
        fs.unlinkSync(path.join(__dirname, "..", `temp/one`));
        fs.unlinkSync(path.join(__dirname, "..", `temp/two`));
      })
      .mergeToFile("temp/merged.webm", "/temp");
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
