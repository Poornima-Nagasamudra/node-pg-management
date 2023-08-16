const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buildingsSchema = new Schema({
  buildingName: {
    type: String,
    required: [true, "Name is Required"],
  },
  address: {
    type: String,
    required: [true, "address is Required"],
  },
  landmark: {
    type: String,
    required: [true, "Landmark is Required"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
const Buildings = mongoose.model("Buildings", buildingsSchema);
module.exports = Buildings;
