const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DominantSchema = new Schema({ emotion: { type: String } });
const EmotionSchema = new Schema({ value: { type: Number } });

//Create schema
const VideoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  end_time: {
    type: Number,
    required: true
  },
  dominant_emotion: {
    type: [DominantSchema],
    required: true
  },
  angry: {
    type: [EmotionSchema],
    required: true
  },
  disgust: {
    type: [EmotionSchema],
    required: true
  },
  scared: {
    type: [EmotionSchema],
    required: true
  },
  happy: {
    type: [EmotionSchema],
    required: true
  },
  sad: {
    type: [EmotionSchema],
    required: true
  },
  surprised: {
    type: [EmotionSchema],
    required: true
  },
  neutral: {
    type: [EmotionSchema],
    required: true
  }
});

module.exports = Video = mongoose.model("video", VideoSchema);
