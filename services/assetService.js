const userAssets = require("../models/userAssets");

const addAsset = (userId, asset) => {
  return userAssets.findOneAndUpdate(
    { userId: userId },
    { $push: { assets: asset } },
    { upsert: true }
  );
};
const getAssets = userId => {
  return userAssets.findOne({ userId: userId }, "assets").exec();
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
module.exports = {
  addAsset,
  getAssets,
  removeUserAsset
};
