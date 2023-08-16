const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tenantsSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  aadhar: {
    type: String,
    required: [true, "Aadhar is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: "Rooms",
    required: true,
  },
  building: {
    type: Schema.Types.ObjectId,
    ref: "Buildings",
    required: true,
  },
  mobile: {
    type: String,
    required: [true, "Mobile is required"],
  },
});
const Tenants = mongoose.model("Tenants", tenantsSchema);
module.exports = Tenants;
