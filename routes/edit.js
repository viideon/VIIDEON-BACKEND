const router = require("express").Router();
const editController = require("../controllers/editController");

router.route("/merge").post(editController.mergeVideos);
router.route("/addtrack").post(editController.addMusic);

module.exports = router;
