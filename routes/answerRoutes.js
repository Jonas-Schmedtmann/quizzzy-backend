const express = require("express");
const answerController = require("../controllers/answerController");

const router = express.Router();

router.route("/").post(answerController.postAnswer);

router
  .route("/ifanswered/:userId/:questionId")
  .get(answerController.checkIfAnswered);

router.route("/:userId/:questionId").patch(answerController.updateAnswer);

module.exports = router;
