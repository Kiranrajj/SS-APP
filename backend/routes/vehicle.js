var express = require("express");
var router = express.Router();
const VehicleCtrl = require("../controller/vehicle.ctrl");

router.post("/", (req, res) => {
  // console.log(req.body, "body");
  VehicleCtrl.createVehicle(req, res);
}); // Create Vehicle

router.get("/", (req, res) => {
  VehicleCtrl.getAllVehicles(req, res);
});

module.exports = router;
