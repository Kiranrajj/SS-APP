const Vehicle = require("../models/vehicle.model");

//Create Branch action With Body as Input
exports.createVehicle = (req, res) => {
  let body = req.body;
  console.log(body, "ajshasdh");
  let vehicle = new Vehicle({
    vehicleName: body.vehicleName,
    vehicleNumber: body.vehicleNumber,
    type: body.vehicleType,
    amount: body.amount,
  });

  vehicle.save();
};
