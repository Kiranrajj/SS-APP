var express = require("express");
var router = express.Router();
const VehicleCtrl = require("../controller/vehicle.ctrl");

router.post("/", (req, res) => {
  VehicleCtrl.createVehicle(req, res);
}); // Create Vehicle

router.get("/", (req, res) => {
  VehicleCtrl.getAllVehicles(req, res);
});

router.get("/:id", (req, res) => {
  VehicleCtrl.getVehicleById(req, res);
});

router.put("/:id", (req, res) => {
  VehicleCtrl.updateVehicle(req, res);
});

router.delete("/:id", (req, res) => {
  VehicleCtrl.deleteVehicle(req, res);
});

module.exports = router;
