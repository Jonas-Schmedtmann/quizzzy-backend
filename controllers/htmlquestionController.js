const Question = require("../models/htmlquestionModel");
const handler = require("./handler");

const catchAsync = require("../utils/catchAsync");

exports.getAllHTMLQuestions = handler.getAll(Question);
exports.createHTMLQuestion = handler.createOne(Question);

exports.getLatestHTMLQuestion = catchAsync(async (req, res, next) => {
  const latestQuestion = await Question.find().sort({ _id: -1 }).limit(1);

  res.status(200).json({
    status: "success",
    data: {
      data: latestQuestion,
    },
  });
});
