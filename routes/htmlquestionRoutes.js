const express = require("express");

const HTMLQuestionController = require("../controllers/htmlquestionController");
const settingsController = require("../controllers/settingsController");

const router = express.Router();

router
  .route("/")
  .get(HTMLQuestionController.getAllHTMLQuestions)
  .post(
    settingsController.updateHTMLQuestionCount,
    HTMLQuestionController.createHTMLQuestion
  );

router.route("/latest").get(HTMLQuestionController.getLatestHTMLQuestion);

module.exports = router;
