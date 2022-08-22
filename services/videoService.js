const videoModel = require("../models/videos");
const interactiveModel = require("../models/interactive")

const updateVideo = (id, video) => {
  return videoModel.update(id, video, { new: true });
};

const deleteVideo = videoId => {
  return videoModel.delete({ _id: videoId });
};

const deleteVideoByThumnail = thumbnail => {
  return videoModel.deleteByThumbnail(thumbnail);
};

const findUserVideo = (userId, page) => {
  // TODO: Update to support DynamoDB paging
  return videoModel.findByUserIdAndCampaign(userId, false);
};

const findUserVideoByTitle = async (userId, page, search) => {
  // TODO: Update to support DynamoDB paging
  const videos = await videoModel.findByUserIdAndTitle(userId, false, search);
  return _.reverse(_.sortBy(videos, 'date'));
};

const findUserCampaignVideo = (userId, page) => {
  // TODO: Update to support DynamoDB paging
  return videoModel.findByUserIdAndCampaign(userId, true);
};

const findUserCamaignVideoByTitle = async (userId, page, search) => {
  // TODO: Update to support DynamoDB paging
  const videos = await videoModel.findByUserIdAndTitle(userId, true, search);
  return _.reverse(_.sortBy(videos, 'date'));
};

const getAllVideos = () => {
  return videoModel.find();
};
const findVideoByUrl = url => {
  return videoModel.findByUrl(url);
};
const findVideoById = id => {
  return videoModel.get(id);
};
const getCampaignVideos = id => {
  return videoModel.findByUserIdAndCampaign(id, true);
};
const getViewCount = async id => {
  const userVideos = await videoModel.findByUserId(id);
  if (userVideos.length < 1) return;

  const values = userVideos.map(x => parseInt(x["views"]) || 0);
  return values.reduce((a, b) => a + b);
};
const getVideoCount = async id => {
  const {count} = await videoModel.countVideos(id);
  return count;
};
const getChatVidCount = async id => {
  const {count} = await interactiveModel.countDocumentsByUserId(id);
  return count;
};
const getCampaignCount = async id => {
  const {count} = await videoModel.countCampaignVideos(id);
  return count;
};

const incrementVideoEmail = (_id, count) => {
  return videoModel.update({ _id }, { $ADD: { emailShareCount: count } });
};
const incrementVideoViews = _id => {
  return videoModel.update({ _id }, { $ADD: { views: 1 } });
};
const incrementVideoWatch = _id => {
  return videoModel.update({ _id }, { $ADD: { watch: 1 } });
};
const incrementEmailOpen = _id => {
  return videoModel.update({ _id }, { $ADD: { emailOpens: 1 } });
};
const incrementCtaClicks = _id => {
  return videoModel.update({ _id }, { $ADD: { ctaClicks: 1 } });
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
