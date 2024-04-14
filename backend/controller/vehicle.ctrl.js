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
  try {
    const vehicles = await Vehicle.find(query);
    res.status(200).json(vehicles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getVehicleById = async (req, res) => {
  let query = { s: "A" };
  if (req.params.id) {
    query._id = req.params.id;
  }

  try {
    // Find one document that matches the specified query
    const result = await Vehicle.findOne(query);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error occurred while executing findOne:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.updateVehicle = async (req, res) => {
  let body = req.body;
  let newData = {};

  if (body.vehicleName) {
    newData.vehicleName = body.vehicleName;
  }
  if (body.vehicleNumber) {
    newData.vehicleNumber = body.vehicleNumber;
  }
  if (body.amount) {
    newData.amount = body.amount;
  }

  try {
    const result = await Vehicle.findOneAndUpdate(
      { _id: req.params.id },
      { $set: newData },
      { new: true }
    );
  } catch (error) {
    console.error("Error updating vehicle:", error);
  }
};

exports.deleteVehicle = async (req, res) => {
  let query = {};
  query._id = req.params.id;

  try {
    const result = await Vehicle.findOneAndUpdate(
      query,
      { s: "D" },
      { new: true }
    );
  } catch (error) {
    console.error("Error deleting vehicle:", error);
  }
};
