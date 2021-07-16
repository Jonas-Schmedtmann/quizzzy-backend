// Imports
const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");

const questionRouter = require("./routes/questionRoutes");
const settingsRouter = require("./routes/settingsRoutes");
const userRouter = require("./routes/userRoutes");
const answerRouter = require("./routes/answerRoutes");

const errorController = require("./controllers/errorController");

// Configuring dotenv
dotenv.config({
  path: "./config.env",
});

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/v1/questions", questionRouter);
app.use("/api/v1/settings", settingsRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/answers", answerRouter);

app.use(errorController);

module.exports = app;
