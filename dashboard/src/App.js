import React, { Component } from "react";
import Youtube from "./components/Youtube";
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
    this.state = {
      emotion: "Happiness",
      color: "rgba(255, 99, 132, 0.6)",
      videoLink: "https://www.youtube.com/watch?v=_TUTJ0klnKk",
      time: 0,
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      data: [0, 10, 25, 43, 52, 82, 60, 88, 34, 23, 54],
      angry: [],
      disgust: [],
      scared: [],
      happy: [],
      sad: [],
      surprised: [],
      neutral: []
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
          neutral: result[0].neutral
        });
      });
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

  changeVideo(video) {
    this.setState({
      videoLink: video
    });
    console.log("NEW LINK: " + this.state.videoLink);
    axios
      .get(
        `https://api.mlab.com/api/1/databases/nushack/collections/video?q={link:"${video}"}&apiKey=jK4P4v-hA_-MNUJ_xXoHGD6T0bZYehNU`
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
      })
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }

  updateTime(newTime) {
    this.setState({
      time: newTime
    });
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
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
