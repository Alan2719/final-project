const router = require("express").Router();
const tripsController = require("../../controllers/tripControllers");

router.route("/tripInfo").get(tripsController.getTrips);
router.route("/createTrip/:id").post(tripsController.create);

module.exports = router;