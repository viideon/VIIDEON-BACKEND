const router = require("express").Router();
const assetController = require("../controllers/assetController");

router.route("/add").post(assetController.addNewAsset);
router.route("/add/music").post(assetController.addMusicAsset);
router.route("/get").get(assetController.getAssets);
router.route("/get/music").get(assetController.getMusicAsset);
router.route("/remove").delete(assetController.removeAsset);
router.route("/removemusic").delete(assetController.removeMusicAsset);

module.exports = router;
