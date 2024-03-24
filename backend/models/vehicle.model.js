const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const vehicle = new mongoose.Schema(
  {
    vehicleName: {
      type: String,
      required: false,
    },
    vehicleNumber: {
      type: String,
      required: false,
      unique: true,
    },
    type: {
      type: String,
      enum: ["200", "100", "400", "600"],
      default: "200",
    },
    amount: {
      type: Number,
      required: true,
    },
    s: {
      type: String,
      default: "A",
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("vehicle", vehicle);
