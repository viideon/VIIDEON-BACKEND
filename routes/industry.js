const router = require("express").Router();
const Industry = require("../controllers/industryController")
router.route("/").get(Industry.getIndustries);
router.route("/").post(Industry.addIndustry);
router.route("/").patch(Industry.updateIndustry);
router.route("/:id").delete(Industry.deleteIndustry);

module.exports = router;
