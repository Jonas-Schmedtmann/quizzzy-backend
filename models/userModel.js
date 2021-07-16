const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "User without ID cannot be registerd!"],
    unique: true,
  },
  tag: {
    type: String,
    required: [true, "User without a tag/name is not applicable!"],
    unique: true,
  },
  totalPoints: {
    type: Number,
    default: 0,
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
  photo: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
