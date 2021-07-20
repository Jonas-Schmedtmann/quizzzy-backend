const mongoose = require("mongoose");

// Schema
const settingsSchema = new mongoose.Schema({
  prefix: {
    type: String,
    trim: true,
  },
  questionCount: Number,
  htmlquestioncount: Number,
});

const Settings = mongoose.model("Settings", settingsSchema);
module.exports = Settings;
