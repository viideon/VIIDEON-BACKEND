const userAssets = require("../models/userAssets");

const addAsset = (userId, asset) => {
  return userAssets.findOneAndUpdate(
    { userId: userId },
    { $push: { assets: asset } },
    {upsert:true}
  );
};
const getAssets = userId => {
  return userAssets.find({ userId: userId }, "assets");
};
module.exports = {
  addAsset,
  getAssets
};
