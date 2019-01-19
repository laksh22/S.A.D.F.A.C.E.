import React, { Component } from "react";
import Youtube from "./components/Youtube";
import EmotionCard from "./components/EmotionCard";
import SearchBar from "./components/SearchBar";
import SampleTable from "./components/SampleTable";
import AppNavbar from "./components/AppNavbar";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  constructor(props) {
    super(props);
    this.changeEmotion = this.changeEmotion.bind(this);
    this.changeVideo = this.changeVideo.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.state = {
      emotion: "Happiness",
      color: "rgba(255, 99, 132, 0.6)",
      videoLink: "https://www.youtube.com/watch?v=2JAElThbKrI",
      time: 0,
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      data: [0, 10, 25, 43, 52, 82, 60, 88, 34, 23, 54]
    };
  }

  getData() {
    fetch("/search/videos")
      .then(res => res.json())
      .then(data => console.log(data));
  }

  componentDidMount() {
    this.getData();
  }

  changeEmotion(newEmotion) {
    var newColor = " ";
    if (newEmotion === "Happiness") {
      newColor = "rgba(255, 99, 132, 0.6)";
    } else if (newEmotion === "Anger") {
      newColor = "rgba(54, 162, 235, 0.6)";
    } else if (newEmotion === "Surprise") {
      newColor = "rgba(255, 206, 86, 0.6)";
    }
    this.setState({
      emotion: newEmotion,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 9],
      color: newColor
    });
    console.log(this.state.color);
  }

  changeVideo(video) {
    this.setState({
      videoLink: video
    });
    console.log("CHANGING VIDEO");
  }

  updateTime(newTime) {
    this.setState({
      time: newTime
    });
    console.log("Current Time:" + this.state.time);
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
