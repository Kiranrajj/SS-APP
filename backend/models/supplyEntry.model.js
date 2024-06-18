const mongoose = require("mongoose");
// const paginate = require('will-paginate');
const ObjectId = mongoose.Schema.Types.ObjectId;

const supplyEntry = new mongoose.Schema(
  {
    vehicleId: {
      type: ObjectId,
      required: true,
      ref: "vehicle",
    },
    customerId: {
      type: ObjectId,
      required: true,
      ref: "user",
    },
    amount: {
      type: Number,
      required: true,
    },
    dateOfSupply: {
      type: Date,
      required: false,
    },
    supplyEntry_id: {
      type: String,
      required: false,
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

// supplyEntry.plugin(paginate);

module.exports = mongoose.model("supplyEntry", supplyEntry);
