const Video = require("../models/videos");

const updateVideo = (id, video) => {
  return Video.findByIdAndUpdate(id, video, { new: true });
};

const deleteVideo = (videoId) => {
  return Video.deleteOne({ _id: videoId });
};

const findUserVideo = (userId, page) => {
  return Video.find({ userId: userId })
    .sort({ date: -1 })
    .skip((page - 1) * 9)
    .limit(9);
};
const findUserVideoByTitle = (userId, page, search) => {
  return Video.find({
    $and: [
      { userId: userId },
      { title: { $regex: new RegExp(".*" + search + ".*"), $options: "i" } },
    ],
  }).sort({ date: -1 });
  // .skip((page - 1) * 9)
  // .limit(9);
};

const getAllVideos = () => {
  return Video.find();
};
const findVideoByUrl = (url) => {
  return Video.find({ url: url });
};
const findVideoById = (id) => {
  return Video.findOne({ _id: id });
};
const getVideoCount = (id) => {
  const count = Video.countDocuments({ userId: id }, function (err, count) {
    return count;
  });
  return count;
};
const incrementVideoEmail = (_id) => {
  return Video.updateOne({ _id }, { $inc: { emailShareCount: 1 } });
};
const incrementVideoViews = (_id) => {
  return Video.updateOne({ _id }, { $inc: { views: 1 } });
};
const incrementVideoWatch = (_id) => {
  return Video.updateOne({ _id }, { $inc: { watch: 1 } });
};
module.exports = {
  updateVideo,
  deleteVideo,
  findUserVideo,
  getAllVideos,
  findVideoByUrl,
  findVideoById,
  findUserVideoByTitle,
  getVideoCount,
  incrementVideoEmail,
  incrementVideoViews,
  incrementVideoWatch,
};
