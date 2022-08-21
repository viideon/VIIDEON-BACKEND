const PublicMusic = require("../models/publicMusicAssets");
const userAssetsModel = require("../models/userAssets");

const addAsset = (userId, asset) => {
  return userAssetsModel.update(
    { userId: userId },
    { $ADD: { assets: asset } }
  );
};
const addMusicAsset = (userId, asset) => {
  return userAssetsModel.update(
    { userId: userId },
    { $ADD: { musicAssets: asset } }
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
  return userAssetsModel.findByUserId(userId);
};
const getAllAssets = () => {
  return userAssetsModel.find();
}
const getMusicAssets = userId => {
  return userAssetsModel.findByUserId({ userId: userId });
};
const removeUserAsset = async (userId, assetId, res) => {
  try {
    await userAssetsModel.update(
      { userId: userId },
      { $delete: { assets: { _id: assetId } } },
    );
    res.status(200).json({ message: "asset removed" });
  } catch (_error) {
    return res.status(400).json({ message: "failed to remove" });
  }
};
const removeMusicAsset = async (userId, assetId, res) => {
  try {
    await userAssetsModel.update(
        { userId: userId },
        { $delete: { musicAssets: { _id: assetId } } },
    );
    res.status(200).json({ message: "asset removed" });
  } catch (_error) {
    res.status(200).json({ message: "asset removed" });
  }
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
