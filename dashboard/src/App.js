import React, { Component } from "react";
import Youtube from "./components/youtube";
import EmotionCard from "./components/EmotionCard";
import SearchBar from "./components/SearchBar";
import SampleTable from "./components/SampleTable";
import AppNavbar from "./components/AppNavbar";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.changeEmotion = this.changeEmotion.bind(this);
    this.changeVideo = this.changeVideo.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.setDominantColor = this.setDominantColor.bind(this);
    this.mode = this.mode.bind(this);
    this.state = {
      emotion: "Happiness",
      color: "rgba(255, 99, 132, 0.6)",
      videoLink: "2JAElThbKrI",
      time: 0,
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      angry: [],
      disgust: [],
      scared: [],
      happy: [],
      sad: [],
      surprised: [],
      neutral: [],
      dominant: [],
      dominantColor: "",
      dominantEmotionText: ""
    };
  }

  componentWillMount() {
    const url = `https://api.mlab.com/api/1/databases/nushack/collections/video?q={link:"${
      this.state.videoLink
    }"}&apiKey=jK4P4v-hA_-MNUJ_xXoHGD6T0bZYehNU`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        return res;
      })
      .then(result => {
        console.log("CHANGING DATA" + result[0].happiness);
        this.setState({
          data: result[0].happiness,
          happy: result[0].happiness,
          angry: result[0].anger,
          disgust: result[0].disgust,
          scared: result[0].scared,
          sad: result[0].sadness,
          surprised: result[0].surprise,
          neutral: result[0].neutral,
          dominant: result[0]["dominant emotion"]
        });
      });
    this.setDominantColor();
  }

  changeEmotion(newEmotion) {
    var newColor = " ";
    var newEmotionData = [];
    if (newEmotion === "Happiness") {
      newColor = "rgba(10, 160, 20, 0.6)";
      newEmotionData = this.state.happy;
    } else if (newEmotion === "Anger") {
      newColor = "rgba(255, 99, 132, 0.6)";
      newEmotionData = this.state.angry;
    } else if (newEmotion === "Surprise") {
      newColor = "rgba(210, 210, 86, 0.6)";
      newEmotionData = this.state.surprised;
    } else if (newEmotion === "Sad") {
      newColor = "rgba(25, 26, 86, 0.6)";
      newEmotionData = this.state.sad;
    } else if (newEmotion === "Neutral") {
      newColor = "rgba(54, 162, 235, 0.6)";
      newEmotionData = this.state.neutral;
    } else if (newEmotion === "Scared") {
      newColor = "rgba(180, 0, 0, 0.6)";
      newEmotionData = this.state.scared;
    } else if (newEmotion === "Disgust") {
      newColor = "rgba(139,69,19, 0.6)";
      newEmotionData = this.state.disgust;
    }

    this.setState({
      emotion: newEmotion,
      data: newEmotionData,
      color: newColor
    });
  }

  mode(array) {
    if (array.length === 0) return null;
    var modeMap = {};
    var maxEl = array[0],
      maxCount = 1;
    for (var i = 0; i < array.length; i++) {
      var el = array[i];
      if (modeMap[el] == null) modeMap[el] = 1;
      else modeMap[el]++;
      if (modeMap[el] > maxCount) {
        maxEl = el;
        maxCount = modeMap[el];
      }
    }
    return maxEl;
  }

  setDominantColor() {
    var dominantEmotion = this.mode(this.state.dominant);
    var addColor = "";
    var domEmotionText = "";
    if (dominantEmotion === "happiness") {
      addColor = "rgba(10, 160, 20, 0.6)";
      domEmotionText = "Happy";
    } else if (dominantEmotion === "anger") {
      addColor = "rgba(255, 99, 132, 0.6)";
      domEmotionText = "Anger";
    } else if (dominantEmotion === "surprise") {
      addColor = "rgba(210, 210, 86, 0.6)";
      domEmotionText = "Surprise";
    } else if (dominantEmotion === "sadness") {
      addColor = "rgba(25, 26, 86, 0.6)";
      domEmotionText = "Sadness";
    } else if (dominantEmotion === "neutral") {
      addColor = "rgba(54, 162, 235, 0.6)";
      domEmotionText = "Neutral";
    } else if (dominantEmotion === "scared") {
      addColor = "rgba(180, 0, 0, 0.6)";
      domEmotionText = "Scared";
    } else if (dominantEmotion === "disgut") {
      addColor = "rgba(139,69,19, 0.6)";
      domEmotionText = "Disgust";
    }

    this.setState({
      dominantColor: addColor,
      dominantEmotionText: domEmotionText
    });
    console.log("THIS IS THE DOMINANT EMOTION: " + dominantEmotion);
  }

  changeVideo(video) {
    var vidIndex = video.split("?v=")[1].split("&")[0];
    this.setState({
      videoLink: vidIndex
    });
    console.log("NEW LINK: " + this.state.videoLink);
    axios
      .get(
        `https://api.mlab.com/api/1/databases/nushack/collections/video?q={link:"${vidIndex}"}&apiKey=jK4P4v-hA_-MNUJ_xXoHGD6T0bZYehNU`
      )
      .then(result => {
        console.log("API DATA: " + result.data[0].happiness);
        this.setState({
          data: result.data[0].happiness,
          happy: result.data[0].happiness,
          angry: result.data[0].anger,
          disgust: result.data[0].disgust,
          scared: result.data[0].scared,
          sad: result.data[0].sadness,
          surprised: result.data[0].surprise,
          neutral: result.data[0].neutral
        });
        console.log(this.state.happy);
      })
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
    this.setDominantColor();
  }

  updateTime(newTime) {
    //var newData = this.state.happy;
    //newData[newTime] = 1;
    this.setState({
      time: newTime
      //happy: newData
    });
    //console.log("TIME UPDATED TO: " + this.state.happy);
  }

  render() {
    return (
      <div>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid>
            <AppNavbar />
            <SearchBar videoChanger={this.changeVideo} />
            <SampleTable />
            <Youtube
              videoLink={this.state.videoLink}
              currentTime={this.state.time}
              updateTime={this.updateTime}
            />
            <EmotionCard
              emotionHandler={this.changeEmotion}
              emotion={this.state.emotion}
              color={this.state.color}
              currentTime={this.state.time}
              labels={this.state.labels}
              data={this.state.data}
              dominantColor={this.state.dominantColor}
              dominantEmotionText={this.state.dominantEmotionText}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
