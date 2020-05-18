const router = require("express").Router();
const editController = require("../controllers/editController");

router.route("/videomerge").post(editController.mergeVideos);
router.route("/merge").post(editController.mergeFile);
router.route("/addtrack").post(editController.addMusic);

module.exports = router;
