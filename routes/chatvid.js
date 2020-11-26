
const router = require('express').Router();
const controller = require('../controllers/chatvidController');

router.route("/").post(controller.save);
router.route("/").get(controller.get);
router.route("/").patch(controller.update);
router.route("/").delete(controller.deleteChatvid);
router.route("/reply").post(controller.addReply);
router.route("/step").patch(controller.updateJumps);
router.route("/metrics").post(controller.saveAnalytics);
router.route("/metrics/:id").post(controller.getMetrics);
module.exports = router;
