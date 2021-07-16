const mongoose = require("mongoose");

// Schema
const settingsSchema = new mongoose.Schema({
  prefix: {
    type: String,
    trim: true,
  },
  questionChannelId: String,
  answerChannelId: String,
  questionCount: Number,
});

const Settings = mongoose.model("Settings", settingsSchema);
module.exports = Settings;
