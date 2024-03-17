const mongoose = require("mongoose");
// const paginate = require('will-paginate');
const ObjectId = mongoose.Schema.Types.ObjectId;

const supply = new mongoose.Schema(
  {
    vehicle: {
      type: ObjectId,
      required: true,
      ref: "vehicle",
    },
    customer: {
      type: ObjectId,
      required: true,
      ref: "user",
    },
    amount: {
      type: Number,
      required: true,
    },
    supply_id: {
      type: String,
      required: false,
    },
    pickupdate: {
      type: Date,
      required: false,
    },
    timeslot: {
      type: String,
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

// supply.plugin(paginate);

module.exports = mongoose.model("supply", supply);
