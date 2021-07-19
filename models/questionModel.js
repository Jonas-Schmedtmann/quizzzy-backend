const mongoose = require("mongoose");

// Schema
const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    trim: true,
    required: [true, "Question is compulsory!"],
  },
  explanation: {
    type: String,
    trim: true,
    required: [true, "Question requires a explanation!"],
  },
  questionNo: {
    type: Number,
  },
  options: {
    type: [String],
    required: [true, "Options is compulsory!"],
    validate: {
      validator(val) {
        return val.length > 1;
      },
      message: "A question at least requires 2 options.",
    },
  },
  correctOption: {
    type: String,
    lowercase: true,
    required: [true, "Options is compulsory!"],
    validate: {
      validator(val) {
        // prettier-ignore
        const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        return [...alphabets].splice(0, this.options.length).includes(val);
      },
      message: `The correct options should be one of available options.`,
    },
  },
  postedAt: {
    type: Date,
    default: Date.now(),
  },
  userId: String,
  image: String,
  description: String,
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
