const mongoose = require("mongoose");

// Schema
const HTMLAnswerSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: [true, "Answer without ID cannot be registerd!"],
  },
  questionId: String,
  userId: String,
  points: Number,
  message: String,
  checkedBy: String,
});

const HTMLAnswer = mongoose.model("HTMLAnswer", HTMLAnswerSchema);
module.exports = HTMLAnswer;
