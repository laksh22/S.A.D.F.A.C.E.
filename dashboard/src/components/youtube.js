import React from "react";
import YouTube from "react-youtube";

class Youtube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      player: null
    };
    this.increaseTimer = this.increaseTimer.bind(this);
    this.onReady = this.onReady.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
  }

  increaseTimer() {
    this.interval = setInterval(() => {
      this.setState({
        currentTime: Math.trunc(this.state.player.getCurrentTime())
      });
      this.props.updateTime(this.state.currentTime);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onReady(event) {
    // access to player in all event handlers via event.target
    this.setState({
      player: event.target
    });
    event.target.pauseVideo();
    console.log(this.state.player.getDuration());
  }

  onPlayVideo() {
    this.state.player.playVideo();
    this.increaseTimer();
  }

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId={this.props.videoLink /*.split("?v=")[1].split("&")[0]*/}
        opts={opts}
        onReady={this.onReady}
        onPlay={this.onPlayVideo}
      />
    );
  }
}

export default Youtube;
