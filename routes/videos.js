const router = require("express").Router();
const videosController = require("../controllers/videosController");

router.route("/").post(videosController.postVideo);
router.route("/").get(videosController.getAllVideos);
router.route("/getTemplate").post(videosController.getTemplate);

router.route("/").patch(videosController.updateVideo);
router.route("/").delete(videosController.deleteVideo);

router.route("/email").post(videosController.emailVideo);
router.route("/updateViews").post(videosController.updateVideoViews);
router.route("/updateWatch").post(videosController.updateVideoWatchCount);
router.route("/updateEmailShare").post(videosController.updateVideoEmailShare);
router.route("/update/cta").post(videosController.updateCtaClicks);
router.route("/user").get(videosController.getUserVideos);
router.route("/single").get(videosController.getSingleVideo);
router.route("/campaignVideos").get(videosController.getUserCampaignVideos);
router.route("/multiple/email").post(videosController.sendMultipleEmail);
router.route("/count").get(videosController.getVideoCount);
router.route("/campaign/count").get(videosController.getCampaignCount);
router.route("/email/track").get(videosController.trackEmailOpen);
module.exports = router;
