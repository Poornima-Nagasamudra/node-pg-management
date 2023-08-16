const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
  },
  email: {
    type: String,
    required: [true, "user email is required"],
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
