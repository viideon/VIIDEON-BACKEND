const Video = require("../models/videos");

const updateVideo = (id, video) => {
  return Video.findByIdAndUpdate(id, video, { new: true });
};

const deleteVideo = videoId => {
  return Video.deleteOne({ _id: videoId });
};

const findUserVideo = (userId, page) => {
  console.log("called 1");

  return Video.find({ userId: userId })
    .sort({ date: -1 })
    .skip((page - 1) * 9)
    .limit(9);
};
const findUserVideoByTitle = (userId, page, search) => {
  // console.log("called 2", search);
  return Video.find({
    $and: [
      { userId: userId },
      { title: { $regex: new RegExp(".*" + search + ".*"), $options: "i" } }
    ]
  }).sort({ date: -1 });
  // .skip((page - 1) * 9)
  // .limit(9);
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
  findVideoById,
  findUserVideoByTitle
};

const getBusinessCity = (
  fullAddress,
  type,
  city,
  businessName,
  option,
  pagination,
  page
) => {
  return Business.find({
    $and: [{ city: city }, { typeOfBusiness: type }],
    $or: [
      { fullAddress: { $regex: fullAddress, $options: "i" } },
      { businessName: { $regex: businessName, $options: "i" } },
      { option: { $regex: option, $options: "i" } }
    ]
  })
    .skip((page - 1) * pagination)
    .limit(pagination);
};

const getBusinessForName = city => {
  return Business.find({
    city: { $regex: new RegExp("^" + city), $options: "i" }
  });
};
