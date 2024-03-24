var express = require("express");
var router = express.Router();
const VehicleCtrl = require("../controller/vehicle.ctrl");

router.post("/", (req, res) => {
  // console.log(req.body, "body");
  VehicleCtrl.createVehicle(req, res);
  res.send(200);
}); // Create Vehicle

module.exports = router;
