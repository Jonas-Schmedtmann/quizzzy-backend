// Imports
const mongoose = require("mongoose");

const app = require("./app");

// Adding the Database password in the Database URL
const DB = process.env.DATABASE;

// Connecting to the Database

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("========= DB connection successful! =========");
  });

// Server
const port = process.env.PORT || 8000;
app.listen(port, "0.0.0.0", () => {
  console.log(`App running on port ${port}.....`);
});
