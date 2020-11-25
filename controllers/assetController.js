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

module.exports.addMusicAsset = async (req, res) => {
  let { userId, asset } = req.body;
  try {
    await assetService.addMusicAsset(userId, asset);
    return res.status(201).json({ message: "music asset added" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports.getAssets = async (req, res) => {
  let userId = req.query.userId;
  try {
    let asset = await assetService.getAssets(userId);
    if (asset && asset.assets) {
      let assets = asset.assets;
      return res.status(200).json({ assets: assets });
    }
    res.status(200).json({ assets: [] });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports.getAllAssets = async (req, res) => {
  try {
    let asset = await assetService.getAllAssets();
    if (asset && asset.assets) {
      let assets = asset.assets;
      return res.status(200).json({ assets: assets });
    }
    res.status(200).json({ assets: [] });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports.getMusicAsset = async (req, res) => {
  let userId = req.query.userId;
  try {
    let asset = await assetService.getMusicAssets(userId);
    if (asset && asset.musicAssets) {
      let assets = asset.musicAssets;
      return res.status(200).json({ musicAssets: assets });
    }
    res.status(200).json({ musicAssets: [] });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.removeAsset = async (req, res) => {
  let assetId = req.query.assetId;
  let userId = req.query.userId;
  try {
    if (userId === "" && assetId === "") {
      res.status(400).json({ message: "user id or asset id missing" });
      return;
    }
    await assetService.removeUserAsset(userId, assetId, res);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports.removeMusicAsset = async (req, res) => {
  let assetId = req.query.assetId;
  let userId = req.query.userId;
  try {
    if (userId === "" && assetId === "") {
      res.status(400).json({ message: "user id or asset id missing" });
      return;
    }
    await assetService.removeMusicAsset(userId, assetId, res);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
