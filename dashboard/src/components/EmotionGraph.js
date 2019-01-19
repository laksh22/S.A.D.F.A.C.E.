import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class EmotionGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [
          {
            label: "Percentage",
            data: [0, 10, 25, 43, 52, 82, 60, 88, 34, 23, 54],
            backgroundColor: this.props.color
          }
        ]
      },
      graphTime: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log(this.state.chartData.datasets[0].data[this.state.graphTime]);
      var dataProperty = {
        ...this.state.chartData.datasets[0].data[this.state.graphTime]
      };
      dataProperty = 1;
      this.setState({
        graphTime: this.props.currentTime
      });
      this.setState({ dataProperty });
      console.log(this.state.chartData.datasets[0].data[this.state.graphTime]);
    }, 1000);
  }

  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: this.props.emotion,
              fontSize: 25
            },

            legend: {
              display: true,
              position: "top"
            }
          }}
        />
      </div>
    );
  }
}

export default EmotionGraph;
