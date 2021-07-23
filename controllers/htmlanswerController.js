const HTMLAnswer = require("../models/htmlanswerModel");
const handler = require("./handler");
const catchAsync = require("../utils/catchAsync");

// exports.getAllAnswers = handler.getAll(Answer);
// exports.getAnswer = handler.getOne(Answer);
exports.postAnswer = handler.createOne(HTMLAnswer);

exports.checkIfAnswered = catchAsync(async (req, res, next) => {
  const isAnswered = await HTMLAnswer.exists({
    userId: req.params.userId,
    questionId: req.params.questionId,
  });

  res.status(200).json({
    status: "success",
    data: isAnswered,
  });
});

exports.checkIfchecked = catchAsync(async (req, res, next) => {
  const ifChecked = await HTMLAnswer.findOne({
    userId: req.params.userId,
    questionId: req.params.questionId,
  });

  res.status(200).json({
    status: "success",
    data: ifChecked,
  });
});

exports.updateAnswer = catchAsync(async (req, res, next) => {
  const answer = await HTMLAnswer.findOneAndUpdate(
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
