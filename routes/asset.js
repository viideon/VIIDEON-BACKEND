const router = require("express").Router();
const assetController = require("../controllers/assetController");

router.route("/add").post(assetController.addNewAsset);
router.route("/get").get(assetController.getAssets);
router.route("/remove").delete(assetController.removeAsset);

module.exports = router;