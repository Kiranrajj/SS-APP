const User = require("../models/user.model");

//Create User action With Body as Input
exports.createUser = (req, res) => {
  let body = req.body;
  console.log
  let user = new User({
    name: body.name,
    mobile: body.mobile,
    vehicleId: body.vehicleId,
    userType: body.userType,
  });
  if (body.email) {
    user.email = body.email
  }

  user.save();
  res.send(200);
};

exports.getAllUsers = async (req, res) => {
  let input = req.query;
  let query = {
    s: input.isDeleted && input.isDeleted.toString() == "true" ? "D" : "A",
  };
  if(input.userType){
    query.userType = input.userType;
  }
  console.log(query)
  try {
    const users = await User.find(query);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  let query = {};
  query._id = req.params.id;

  try {
    const result = await User.findOneAndUpdate(
      query,
      { s: "D" },
      { new: true }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

exports.restoreUser = async (req, res) => {
  let query = {};
  query._id = req.params.id;

  try {
    const result = await User.findOneAndUpdate(
      query,
      { s: "A" },
      { new: true }
    );
  } catch (error) {
    console.error("Error restoring user:", error);
  }
};

exports.updateUser = async (req, res) => {
  let body = req.body;
  let newData = {};

  if (body.name) {
    newData.name = body.name;
  }
  if (body.mobile) {
    newData.mobile = body.mobile;
  }
  if (body.userType) {
    newData.userType = body.userType;
  }
  if (body.vehicleId) {
    newData.vehicleId = body.vehicleId;
  }

  try {
    const result = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: newData },
      { new: true }
    );
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

exports.getUserById = async (req, res) => {
  let query = { s: "A" };
  if (req.params.id) {
    query._id = req.params.id;
  }

  try {
    // Find one document that matches the specified query
    const result = await User.findOne(query);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error occurred while executing findOne:", error);
    res.status(500).json({ message: error.message });
  }
};


