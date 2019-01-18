import React, { Component } from "react";
import Youtube from "./components/YouTube";
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
    this.state = {
      emotion: "Happiness",
      color: "rgba(255, 99, 132, 0.6)",
      videoLink: "https://www.youtube.com/watch?v=2JAElThbKrI"
    };
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
      color: newColor
    });
  }

  changeVideo(video) {
    this.setState({
      videoLink: video
    });
    console.log("CHANGING VIDEO");
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
            <Youtube videoLink={this.state.videoLink} />
            <EmotionCard
              emotionHandler={this.changeEmotion}
              emotion={this.state.emotion}
              color={this.state.color}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
