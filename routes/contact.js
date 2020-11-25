const router = require("express").Router();
const contactController = require("../controllers/contactController");

router.route("/create").post(contactController.createContact);

module.exports = router;
