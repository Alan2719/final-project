const router = require("express").Router();
const { deleteTrip } = require("../../controllers/tripControllers");
const tripsController = require("../../controllers/tripControllers");

router.route("/tripInfo").get(tripsController.getTrips);
router.route("/createTrip").post(tripsController.create);
router.route("/deleteTrip").delete(tripsController.deleteTrip);

module.exports = router;