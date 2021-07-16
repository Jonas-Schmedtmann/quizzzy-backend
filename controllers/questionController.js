const Question = require("../models/questionModel");
const handler = require("./handler");

const catchAsync = require("../utils/catchAsync");

exports.getAllQuestions = handler.getAll(Question);
exports.createQuestion = handler.createOne(Question);

exports.getLatestQuestion = catchAsync(async (req, res, next) => {
  const latestQuestion = await Question.find().sort({ _id: -1 }).limit(1);

  res.status(200).json({
    status: "success",
    data: {
      data: latestQuestion,
    },
  });
});
