const router = require("express").Router();
const editController = require("../controllers/editController");

router.route("/merge").post(editController.mergeVideos);

module.exports = router;
