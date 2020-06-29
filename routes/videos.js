const router = require("express").Router();
const videosController = require("../controllers/videosController");
const emailController = require("../controllers/emailController");

router.route("/").post(videosController.postVideo);
router.route("/").get(videosController.getAllVideos);
router.route("/").patch(videosController.updateVideo);
router.route("/").delete(videosController.deleteVideo);
router.route("/email").post(videosController.emailVideo);
router.route("/sendemail").post(videosController.sendGridEmail);
router.route("/gmailsend").post(emailController.sendWithGmail);
router.route("/user").get(videosController.getUserVideos);
router.route("/single").get(videosController.getSingleVideo);
router.route("/multiple/email").post(videosController.sendMultipleEmail);
router.route("/count").get(videosController.getVideoCount);
module.exports = router;
