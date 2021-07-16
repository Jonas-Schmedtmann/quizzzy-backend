const express = require("express");

const questionController = require("../controllers/questionController");
const settingsController = require("../controllers/settingsController");

const router = express.Router();

router
  .route("/")
  .get(questionController.getAllQuestions)
  .post(
    settingsController.updateQuestionCount,
    questionController.createQuestion
  );

router.route("/latest").get(questionController.getLatestQuestion);

module.exports = router;
