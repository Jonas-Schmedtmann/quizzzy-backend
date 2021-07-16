const Settings = require("../models/settingsModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const handler = require("./handler");

exports.createSettings = handler.createOne(Settings);

exports.updateProperty = catchAsync(async (req, res, next) => {
  // console.log("PATCH");
  const updatedSettings = await Settings.findByIdAndUpdate(
    process.env.DATABASE_SETTINGS,
    { [req.params.property]: req.body[req.params.property] },
    { new: true }
  );

  if (!updatedSettings) {
    return next(new AppError(`Please enter a a valid entry.`, 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      [req.params.property]: updatedSettings[req.params.property],
    },
  });
});

exports.getProperty = catchAsync(async (req, res, next) => {
  const updatedSettings = await Settings.findById(
    process.env.DATABASE_SETTINGS
  );

  if (!updatedSettings) {
    return next(new AppError(`Please enter a a valid entry.`, 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      [req.params.property]: updatedSettings[req.params.property],
    },
  });
});

exports.updateQuestionCount = catchAsync(async (req, res, next) => {
  const updatedCount = await Settings.findById(process.env.DATABASE_SETTINGS);

  if (!updatedCount) {
    return next(new AppError(`Please enter a a valid entry.`, 404));
  }

  updatedCount.questionCount += 1;
  await updatedCount.save();

  next();
});

exports.getQuestionCount = catchAsync(async (req, res, next) => {
  const settings = await Settings.findById(process.env.DATABASE_SETTINGS);

  if (!settings) {
    return next(new AppError(`Please enter a a valid entry.`, 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      questionCount: settings.questionCount,
    },
  });
});
