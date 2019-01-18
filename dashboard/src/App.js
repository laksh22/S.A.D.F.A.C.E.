import React, { Component } from "react";
import Youtube from "./components/YouTube";
import EmotionCard from "./components/EmotionCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.changeEmotion = this.changeEmotion.bind(this);
    this.state = {
      emotion: "Happiness",
      color: "rgba(255, 99, 132, 0.6)"
    };
  }

  changeEmotion(newEmotion) {
    var newColor = " ";
    if (newEmotion == "Happiness") {
      newColor = "rgba(255, 99, 132, 0.6)";
    } else if (newEmotion == "Anger") {
      newColor = "rgba(54, 162, 235, 0.6)";
    } else if (newEmotion == "Surprise") {
      newColor = "rgba(255, 206, 86, 0.6)";
    }
    this.setState({
      emotion: newEmotion,
      color: newColor
    });
    console.log("FUNCITON CALLED " + this.state.color);
  }

  render() {
    return (
      <div>
        <Youtube />
        <EmotionCard
          emotionHandler={this.changeEmotion}
          emotion={this.state.emotion}
          color={this.state.color}
        />
      </div>
    );
  }
}

export default App;
