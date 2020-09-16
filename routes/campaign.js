const router = require("express").Router();
const campaignController = require("../controllers/campaignController");

router.route("/templates").get(campaignController.getTemplates);
router.route("/templates").post(campaignController.addTemplate);
router.route("/templates").patch(campaignController.updateTemplate);

module.exports = router;
