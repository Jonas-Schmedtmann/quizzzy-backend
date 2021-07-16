const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router.route("/count").get(userController.getUserCount);

router
  .route("/:userId")
  .get(userController.getUser)
  .patch(userController.updateUser);

router.route("/check/:userId").get(userController.checkUser);

module.exports = router;
