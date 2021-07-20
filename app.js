// Imports
const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");

const questionRouter = require("./routes/questionRoutes");
const answerRouter = require("./routes/answerRoutes");

const HTMLQuestionRouter = require("./routes/htmlquestionRoutes");
const HTMLAnswerRouter = require("./routes/htmlanswerRoutes");

const userRouter = require("./routes/userRoutes");

const settingsRouter = require("./routes/settingsRoutes");
const errorController = require("./controllers/errorController");

// Configuring dotenv
dotenv.config({
  path: "./config.env",
});

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/settings", settingsRouter);

app.use("/api/v1/questions", questionRouter);
app.use("/api/v1/answers", answerRouter);

app.use("/api/v1/htmlquestions", HTMLQuestionRouter);
app.use("/api/v1/htmlanswers", HTMLAnswerRouter);

app.use(errorController);

module.exports = app;
