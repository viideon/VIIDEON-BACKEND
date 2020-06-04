const Video = require("../models/videos");

const updateVideo = (id, video) => {
  return Video.findByIdAndUpdate(id, video, { new: true });
};

const deleteVideo = (videoId, userId) => {
  return Video.deleteOne({ _id: videoId, userId: userId });
};

const findUserVideo = (userId, page) => {
  return Video.find({ userId: userId })
    .skip((page - 1) * 9)
    .limit(9);
};
const getAllVideos = () => {
  return Video.find();
};
const findVideoByUrl = url => {
  return Video.find({ url: url });
};
const findVideoById = id => {
  return Video.findOne({ _id: id });
};
module.exports = {
  updateVideo,
  deleteVideo,
  findUserVideo,
  getAllVideos,
  findVideoByUrl,
  findVideoById
};
