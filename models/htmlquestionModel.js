const mongoose = require("mongoose");

// Schema
const HTMLquestionSchema = new mongoose.Schema({
  questionNo: {
    type: Number,
  },
  postedAt: {
    type: Date,
    default: Date.now(),
  },
  userId: String,
  image: String,
  description: String,
});

const HTMLQuestion = mongoose.model("HTMLQuestion", HTMLquestionSchema);

module.exports = HTMLQuestion;
