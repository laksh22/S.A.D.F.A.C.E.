const express = require("express");
const router = express.Router();

const Video = require("../models/Emotion");

//@route  GET search/videos
//@desc   Get all items
//@access Public
router.get("/", (req, res) => {
  Video.find().then(videos => {
    res.json(videos);
    console.log(videos);
  });
});

module.exports = router;
