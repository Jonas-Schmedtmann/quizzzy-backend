const mongoose = require("mongoose");

// Schema
const HTMLquestionSchema = new mongoose.Schema({
  explanation: {
    type: String,
    trim: true,
    required: [true, "Question requires a explanation!"],
  },
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
