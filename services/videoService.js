const Video = require("../models/videos");

const updateVideo = (id, video) => {
  return Video.findByIdAndUpdate(id, video, { new: true });
};

const deleteVideo = (videoId, userId) => {
  return Video.deleteOne({ _id: videoId, userId: userId });
};
module.exports = {
  updateVideo,
  deleteVideo
};
