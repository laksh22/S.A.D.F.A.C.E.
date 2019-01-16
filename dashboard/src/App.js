import React, { Component } from "react";
import Youtube from "./components/youtube";
import EmotionChart from "./components/emotionchart";

const chartStyle = {
  maxWidth: "300"
};

class App extends Component {
  render() {
    return (
      <div>
        <Youtube />
        <div style={chartStyle}>
          <EmotionChart legendPosition="right" />
        </div>
      </div>
    );
  }
}

export default App;
