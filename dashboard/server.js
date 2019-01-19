const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const videos = require("./routes/videos");

const app = express();

//BodyParser middleware
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

//Connect to mongoDB
mongoose
  .connect(db)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => console.log(err));

app.use("/search/videos", videos);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
