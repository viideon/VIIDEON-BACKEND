const router = require("express").Router();
const emailController = require("../controllers/emailController");

router.route("/config").post(emailController.getAndSaveConfig);
router.route("/config").get(emailController.getUserEmailConfig);
router.route("/config").delete(emailController.deleteUserConfig);
router.route("/send").post(emailController.sendWithGmail);

module.exports = router;
