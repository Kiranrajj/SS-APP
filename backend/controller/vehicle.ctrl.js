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
  res.send(200);
};

exports.getAllVehicles = async (req, res) => {
  let input = req.query;
  let query = {
    s: input.isDeleted && input.isDeleted.toString() == "true" ? "D" : "A",
  };

  Vehicle.paginate(query, {
    page: input.page,
    limit: parseInt(input.per_page || 10),
  }).then((result) => {
    res.send(200, result);
  });
};
