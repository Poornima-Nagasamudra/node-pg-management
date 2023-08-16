const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const roomsSchema = new Schema({
  roomNumber: {
    type: String,
    required: [true, "Name is required"],
  },
  building: {
    type: Schema.Types.ObjectId,
    ref: "Buildings",
    required: true,
  },
});
const Rooms = mongoose.model("Rooms", roomsSchema);
module.exports = Rooms;
