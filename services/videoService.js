const Video = require("../models/videos");

const updateVideo = (id, video) => {
  return Video.findByIdAndUpdate(id, video, { new: true });
};

const deleteVideo = (videoId, userId) => {
  return Video.deleteOne({ _id: videoId, userId: userId });
};

const findUserVideo = userId => {
  return Video.find({ userId: userId });
};
const getAllVideos = () => {
  return Video.find();
};
const findVideoByUrl = url => {
  return Video.find({ url: url });
};
module.exports = {
  updateVideo,
  deleteVideo,
  findUserVideo,
  getAllVideos,
  findVideoByUrl
};
