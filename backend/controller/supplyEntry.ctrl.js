const SupplyEntry = require("../models/supplyEntry.model");

//Create Branch action With Body as Input
exports.createSupplyEntry = (req, res) => {
  let body = req.body;
  let supplyEntry = new SupplyEntry({
    vehicleId: body.vehicleId,
    customerId: body.customerId,
    dateOfSupply: body.dateOfSupply,
    amount: body.amount,
  });

  supplyEntry.save();
  res.send(200);
};

exports.getAllSupplyEntrys = async (req, res) => {
  let input = req.query;
  let query = {
    s: input.isDeleted && input.isDeleted.toString() == "true" ? "D" : "A",
  };
  try {
    const supplyEntrys = await supplyEntry.find(query);
    res.status(200).json(supplyEntrys);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSupplyEntryById = async (req, res) => {
  let query = { s: "A" };
  if (req.params.id) {
    query._id = req.params.id;
  }

  try {
    // Find one document that matches the specified query
    const result = await supplyEntry.findOne(query);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error occurred while executing findOne:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.updateSupplyEntry = async (req, res) => {
  let body = req.body;
  let newData = {};

  if (body.vehicleId) {
    newData.vehicleId = body.vehicleId;
  }
  if (body.customerId) {
    newData.customerId = body.customerId;
  }
  if (body.dateOfSupply) {
    newData.dateOfSupply = body.dateOfSupply;
  }
  if (body.amount) {
    newData.amount = body.amount;
  }

  try {
    const result = await supplyEntry.findOneAndUpdate(
      { _id: req.params.id },
      { $set: newData },
      { new: true }
    );
  } catch (error) {
    console.error("Error updating supplyEntry:", error);
  }
};

exports.deleteSupplyEntry = async (req, res) => {
  let query = {};
  query._id = req.params.id;

  try {
    const result = await supplyEntry.findOneAndUpdate(
      query,
      { s: "D" },
      { new: true }
    );
  } catch (error) {
    console.error("Error deleting supplyEntry:", error);
  }
};
