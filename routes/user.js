const router = require("express").Router();
const userController = require("../controllers/userController");

router.route("/register").post(userController.registerUser);
router.route("/login").post(userController.login);
router.route("/update/:id").patch(userController.updateUser);
router.route("/").get(userController.getAllUsers);
router.route("/:id").get(userController.removeUser);
router.route("/verify").post(userController.verify);
router.route("/resendVerify").post(userController.resend);
router.route("/forgotPassword").post(userController.forget);
router.route("/resetPassword").post(userController.reset);
router.route("/template/").post(userController.addTempSetting);
router.route("/template/").get(userController.getTempSetting);
router.route("/template/:id/:userId").patch(userController.updateTempSetting);
router.route("/preview/").post(userController.getPreview);
router.route("/emailvideo").post(userController.shareVideoInEmail);





module.exports = router;
