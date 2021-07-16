const mongoose = require("mongoose");

// Schema
const answerSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: [true, "Answer without ID cannot be registerd!"],
  },
  type: {
    type: String,
    enum: ["CORRECT", "WRONG", "INVALID", "APPROVED", "DENIED"],
    required: true,
  },
  questionId: String,
  userId: String,
  checkedBy: String,
});

const Answer = mongoose.model("Answer", answerSchema);
module.exports = Answer;
