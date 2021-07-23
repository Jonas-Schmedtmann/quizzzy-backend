const express = require("express");
const HTMLAnswerController = require("../controllers/htmlanswerController");

const router = express.Router();

router.route("/").post(HTMLAnswerController.postAnswer);

router
  .route("/ifanswered/:userId/:questionId")
  .get(HTMLAnswerController.checkIfAnswered);

router
  .route("/ifchecked/:userId/:questionId")
  .get(HTMLAnswerController.checkIfchecked);

router.route("/:userId/:questionId").patch(HTMLAnswerController.updateAnswer);

module.exports = router;
