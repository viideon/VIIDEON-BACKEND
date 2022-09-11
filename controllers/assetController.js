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
module.exports.addPublicMusic = async (req, res) => {
  let { asset } = req.body;
  try {
    await assetService.addPublicMusic(asset);
    return res.status(201).json({ message: "music asset added" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports.getPublicMusic = async (req, res) => {
  try {
    let asset = await assetService.getAllPublicmusic();
    return res.status(200).json({musicAssetIs:asset})
    
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.delPublicMusic = async (req, res) => {
  try {
    const { id } = req.params;
    await assetService.deleteMusicAsset(id);
    res.status(200).json("Successfully Deleted");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.getAssets = async (req, res) => {
  let userId = req.query.userId;
  try {
    let assets = await assetService.getAssets(userId);
    if (assets.length === 0) {
      return res.status(200).json({ assets: [] });
    }
    if (assets.length === 1) {
      return res.status(200).json({ assets: assets[0].assets });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports.getAllAssets = async (req, res) => {
  try {
    let asset = await assetService.getAllAssets();
    return res.status(200).json({allassets:asset})
    
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports.getMusicAsset = async (req, res) => {
  let userId = req.query.userId;
  try {
    let assets = await assetService.getAssets(userId);
    if (assets.length === 0) {
      return res.status(200).json({ musicAssets: [] });
    }
    if (assets.length === 1) {
      return res.status(200).json({ musicAssets: assets[0].musicAssets });
    }
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
