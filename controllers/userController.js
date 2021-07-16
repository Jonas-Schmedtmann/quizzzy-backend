const User = require("../models/userModel");
const handler = require("./handler");
const catchAsync = require("../utils/catchAsync");

exports.getAllUsers = handler.getAll(User);
exports.getUser = handler.getOne(User, "userId");
exports.createUser = handler.createOne(User);
exports.updateUser = handler.updateOne(User, "userId");

exports.checkUser = catchAsync(async (req, res, next) => {
  const doesUserExist = await User.exists({ userId: req.params.userId });

  res.status(200).json({
    status: "success",
    data: doesUserExist,
  });
});

exports.getUserCount = catchAsync(async (req, res, next) => {
  const count = await User.count();

  res.status(200).json({
    status: "success",
    data: count,
  });
});
