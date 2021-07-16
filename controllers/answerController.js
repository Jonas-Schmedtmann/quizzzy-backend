const Answer = require("../models/answerModel");
const handler = require("./handler");
const catchAsync = require("../utils/catchAsync");

// exports.getAllAnswers = handler.getAll(Answer);
// exports.getAnswer = handler.getOne(Answer);
exports.postAnswer = handler.createOne(Answer);

exports.checkIfAnswered = catchAsync(async (req, res, next) => {
  const isAnswered = await Answer.exists({
    userId: req.params.userId,
    questionId: req.params.questionId,
  });

  res.status(200).json({
    status: "success",
    data: isAnswered,
  });
});

exports.updateAnswer = catchAsync(async (req, res, next) => {
  const answer = await Answer.findOneAndUpdate(
    {
      userId: req.params.userId,
      questionId: req.params.questionId,
    },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    data: answer,
  });
});
