const _ = require('lodash');
const { v4: uuid } = require('uuid');

const publicMusicModel = require("../models/publicMusicAssets");
const userAssetsModel = require("../models/userAssets");

const addAsset = async (userId, asset) => {
  let _asset = await userAssetsModel.findByUserId(userId);
  asset._id = uuid();
  console.log('Asset loaded', {assets: _asset, asset});
  if (_asset.length === 0) {
    return userAssetsModel.create(userId, {asset});
  }
  if (_asset.length !== 1) {
    console.error(new Error('Invalid asset configuration'), {assets: _asset});
    throw new Error('Invalid asset configuration');
  }
  return userAssetsModel.update(
    { _id: _asset[0]._id },
    { $ADD: { assets: asset } }
  );
};
const addMusicAsset = async (userId, musicAsset) => {
  let _asset = await userAssetsModel.findByUserId(userId);
  musicAsset._id = uuid();
  console.log('Asset loaded', {assets: _asset, musicAsset});
  if (_asset.length === 0) {
    return userAssetsModel.create(userId, {musicAsset});
  }
  if (_asset.length !== 1) {
    console.error(new Error('Invalid asset configuration'), {assets: _asset});
    throw new Error('Invalid asset configuration');
  }
  return userAssetsModel.update(
      { _id: _asset[0]._id },
      { $ADD: { musicAssets: musicAsset } }
  );
};
const addPublicMusic = (asset) => {
  return publicMusicModel.create({
    ...asset
  });
};

const getAllPublicmusic = () => {
  return publicMusicModel.find();
}
const deleteMusicAsset = (id) => {
  return publicMusicModel.delete({_id: id})
}

const getAssets = userId => {
  return userAssetsModel.findByUserId(userId);
};
const getAllAssets = () => {
  return userAssetsModel.find();
}
const getMusicAssets = userId => {
  return userAssetsModel.findByUserId(userId);
};
const removeUserAsset = async (userId, assetId, res) => {
  try {
    let _asset = await userAssetsModel.findByUserId(userId);
    if (_asset.length !== 1) {
      console.error(new Error('Invalid asset configuration'), {assets: _asset});
      return res.status(400).json({ message: "failed to remove" });
    }
    _.remove(_asset[0].assets, a => a._id === assetId);
    await userAssetsModel.update(
      { _id: _asset[0]._id },
      _.omit(_asset[0], ['_id']),
    );
    res.status(200).json({ message: "asset removed" });
  } catch (_error) {
    console.log('Error removing asset', _error);
    return res.status(400).json({ message: "failed to remove" });
  }
};
const removeMusicAsset = async (userId, assetId, res) => {
  try {
    let _asset = await userAssetsModel.findByUserId(userId);
    if (_asset.length !== 1) {
      console.error(new Error('Invalid asset configuration'), {assets: _asset});
      return res.status(400).json({ message: "failed to remove" });
    }
    _.remove(_asset[0].musicAssets, a => a._id === assetId);
    await userAssetsModel.update(
        { _id: _asset[0]._id },
        _.omit(_asset[0], ['_id']),
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
