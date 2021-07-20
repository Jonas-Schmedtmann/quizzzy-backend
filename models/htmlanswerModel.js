const mongoose = require("mongoose");

// Schema
const HTMLAnswerSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: [true, "Answer without ID cannot be registerd!"],
  },
  points: Number,
  questionId: String,
  userId: String,
});

const HTMLAnswer = mongoose.model("HTMLAnswer", HTMLAnswerSchema);
module.exports = HTMLAnswer;
