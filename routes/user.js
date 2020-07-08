const router = require("express").Router();
const userController = require("../controllers/userController");

router.route("/register").post(userController.registerUser);
router.route("/login").post(userController.login);
router.route("/update/:id").patch(userController.updateUser);
router.route("/").get(userController.getAllUsers);
router.route("/verify").post(userController.verify);
router.route("/forgotPassword").post(userController.forget);
router.route("/resetPassword").post(userController.reset);
module.exports = router;
