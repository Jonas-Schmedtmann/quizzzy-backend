const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");

exports.getAll = (Model) => {
  return catchAsync(async (req, res, next) => {
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };

    const Features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const doc = await Features.query;

    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });
};

exports.createOne = (Model) => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });
};

exports.getOne = (Model, id = "id", popOptions) => {
  return catchAsync(async (req, res, next) => {
    const queryObj = {};
    queryObj[id] = req.params[id];

    const query = Model.findOne(queryObj);
    if (popOptions) query.populate(popOptions);

    const doc = await query;

    if (!doc) {
      return next(
        new AppError(`No document found with the ${id}: ${req.params[id]}`, 404)
      );
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });
};

exports.updateOne = (Model, id = "id") => {
  return catchAsync(async (req, res, next) => {
    const queryObj = {};
    queryObj[id] = req.params[id];

    const doc = await Model.findOneAndUpdate(queryObj, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(
        new AppError(`No document found with the ID: ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });
};
