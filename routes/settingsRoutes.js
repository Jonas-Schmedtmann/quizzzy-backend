const express = require("express");

const settingsController = require("../controllers/settingsController");

const router = express.Router();

router.route("/").post(settingsController.createSettings);

router
  .route("/questioncount")
  .get(settingsController.getQuestionCount)
  .patch(settingsController.updateQuestionCount);

router
  .route("/:property")
  .get(settingsController.getProperty)
  .patch(settingsController.updateProperty);

module.exports = router;
