const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const user = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    dob: {
      type: Date,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    // id: Number,
    address: {
      type: String,
      required: false,
    },
    vehicle: {
      type: ObjectId,
      required: false,
      ref: "vehicle",
    },
    userType: {
      type: String,
      enum: ["customer", "admin", "none"],
      default: "customer",
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("user", user);
