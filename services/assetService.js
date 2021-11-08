const PublicMusic = require("../models/publicMusicAssets");
const userAssets = require("../models/userAssets");



const addAsset = (userId, asset) => {
  return userAssets.findOneAndUpdate(
    { userId: userId },
    { $push: { assets: asset } },
    { upsert: true }
  );
};
const addMusicAsset = (userId, asset) => {
  return userAssets.findOneAndUpdate(
    { userId: userId },
    { $push: { musicAssets: asset } },
    { upsert: true }
  );
};
const addPublicMusic = (asset) => {
  const newMusic = new PublicMusic({
    ...asset
  });
  return newMusic.save();
};

const getAllPublicmusic = () => {
  return PublicMusic.find();
}
const deleteMusicAsset = (id) => {
  return PublicMusic.deleteOne({_id: id})
}

const getAssets = userId => {
  return userAssets.findOne({ userId: userId }, "assets").exec();
};
const getAllAssets = () => {
  return userAssets.find();
}
const getMusicAssets = userId => {
  return userAssets.findOne({ userId: userId }, "musicAssets").exec();
};
const removeUserAsset = (userId, assetId, res) => {
  return userAssets.updateOne(
    { userId: userId },
    { $pull: { assets: { _id: assetId } } },
    { safe: true },
    function(err, obj) {
      if (err) {
        return res.status(400).json({ message: "failed to remove" });
      }
      res.status(200).json({ message: "asset removed" });
    }
  );
};
const removeMusicAsset = (userId, assetId, res) => {
  return userAssets.updateOne(
    { userId: userId },
    { $pull: { musicAssets: { _id: assetId } } },
    { safe: true },
    function(err, obj) {
      if (err) {
        return res.status(400).json({ message: "failed to remove" });
      }
      res.status(200).json({ message: "asset removed" });
    }
  );
};
module.exports = {
  addAsset,
  getAssets,
  getAllAssets,
  removeUserAsset,
  addMusicAsset,
  getAllPublicmusic,
  getMusicAssets,
  addPublicMusic,
  removeMusicAsset,
  deleteMusicAsset
};
