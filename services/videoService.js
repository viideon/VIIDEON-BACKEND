const Video = require("../models/videos");
const updateVideo = (id, video) => {
  return Video.updateOne(
    { _id: id },
    {
      $set: video
    }
  );
};

module.exports = {
  updateVideo
};
