const Video = require("../models/videos");
const Interactives = require("../models/interactive")

const updateVideo = (id, video) => {
  return Video.findByIdAndUpdate(id, video, { new: true });
};

const deleteVideo = videoId => {
  return Video.deleteOne({ _id: videoId });
};


const deleteVideoByThumnail = thumbnail => {
  return Video.findOneAndDelete({thumbnail});
};

const findUserVideo = (userId, page) => {
  return Video.find({ userId: userId, campaign: { $ne: true } })
    .sort({ date: -1 })
    .skip((page - 1) * 9)
    .limit(9);
};

const findUserVideoByTitle = (userId, page, search) => {
  return Video.find({
    $and: [
      { userId: userId, campaign: { $ne: true } },
      { title: { $regex: new RegExp(".*" + search + ".*"), $options: "i" } }
    ]
  }).sort({ date: -1 });
};

const findUserCampaignVideo = (userId, page) => {
  return Video.find({ userId: userId, campaign: true })
    .sort({ date: -1 })
    .skip((page - 1) * 9)
    .limit(9);
};

const findUserCamaignVideoByTitle = (userId, page, search) => {
  return Video.find({
    $and: [
      { userId: userId, campaign: true },
      { title: { $regex: new RegExp(".*" + search + ".*"), $options: "i" } }
    ]
  }).sort({ date: -1 });
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
const getCampaignVideos = id => {
  return Video.find({ userId: id, campaign: true });
};
const getViewCount = async id => {
  let count = await Video.find({ userId: id }, function(err, userVideos) {
    if (userVideos.length < 1) return;
    let values = userVideos.map(x => parseInt(x["views"]) || 0);
    let count = values.reduce((a, b) => a + b);
    return count;
  });
  return count;
};
const getVideoCount = id => {
  const count = Video.countDocuments({ userId: id,isVideo:true }, function(err, count) {
    return count;
  });
  return count ;
};
const getChatVidCount = id => {
  const chatVids = Interactives.countDocuments({ userId: id }, function(err, chatvidcount) {
    return chatvidcount;
  });
  return chatVids ;
};
const getCampaignCount = id => {
  const count = Video.countDocuments({ userId: id, campaign: true }, function(
    err,
    count
  ) {
    return count;
  });
  return count;
};

const incrementVideoEmail = (_id, count) => {
  return Video.updateOne({ _id }, { $inc: { emailShareCount: count } });
};
const incrementVideoViews = _id => {
  return Video.updateOne({ _id }, { $inc: { views: 1 } });
};
const incrementVideoWatch = _id => {
  return Video.updateOne({ _id }, { $inc: { watch: 1 } });
};
const incrementEmailOpen = _id => {
  return Video.updateOne({ _id }, { $inc: { emailOpens: 1 } });
};
const incrementCtaClicks = _id => {
  return Video.updateOne({ _id }, { $inc: { ctaClicks: 1 } });
};
module.exports = {
  updateVideo,
  deleteVideo,
  findUserVideo,
  getAllVideos,
  findVideoByUrl,
  findVideoById,
  findUserVideoByTitle,
  getViewCount,
  getVideoCount,
  getChatVidCount,
  incrementVideoEmail,
  incrementVideoViews,
  incrementVideoWatch,
  getCampaignVideos,
  findUserCamaignVideoByTitle,
  findUserCampaignVideo,
  getCampaignCount,
  incrementCtaClicks,
  incrementEmailOpen,
  deleteVideoByThumnail,
};
