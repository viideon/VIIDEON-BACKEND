const assetService = require("../services/assetService");
module.exports.addNewAsset = async (req, res) => {
  let { userId, asset } = req.body;
  try {
    await assetService.addAsset(userId, asset);
    return res.status(201).json({ message: "asset added" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.getAssets = async (req, res) => {
  let userId = req.query.userId;
  try {
    let asset = await assetService.getAssets(userId);
    let assets = asset.assets;
    if (asset) {
      return res.status(200).json({ assets: assets });
    }
    res.status(400).json({ message: "failed to fetch an asset" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
