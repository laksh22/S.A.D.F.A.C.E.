import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class OverallGraph extends Component {
  constructor(props) {
    super(props);
    /*
    var labelArr = [];
    this.props.labels.forEach(val => {
      labelArr.push(`${Math.floor(val / 60)}:${(0.01 * val) % 60}`);
    });*/
    this.state = {
      chartData: {
        labels: this.props.labels,
        datasets: [
          {
            label: "Angry",
            data: this.props.graphData[0],
            borderColor: "rgba(255, 99, 132, 0.6)",
            backgroundColor: "rgba(255, 99, 132, 0.0)"
          },
          {
            label: "Disgust",
            data: this.props.graphData[1],
            borderColor: "rgba(139,69,19, 0.6)",
            backgroundColor: "rgba(255, 99, 132, 0.0)"
          },
          {
            label: "Scared",
            data: this.props.graphData[2],
            borderColor: "rgba(180, 0, 0, 0.6)",
            backgroundColor: "rgba(255, 99, 132, 0.0)"
          },
          {
            label: "Happy",
            data: this.props.graphData[3],
            borderColor: "rgba(10, 160, 20, 0.6)",
            backgroundColor: "rgba(255, 99, 132, 0.0)"
          },
          {
            label: "Sad",
            data: this.props.graphData[4],
            borderColor: "rgba(25, 26, 86, 0.6)",
            backgroundColor: "rgba(255, 99, 132, 0.0)"
          },
          {
            label: "Surprised",
            data: this.props.graphData[5],
            borderColor: "rgba(210, 210, 86, 0.6)",
            backgroundColor: "rgba(255, 99, 132, 0.0)"
          },
          {
            label: "Neutral",
            data: this.props.graphData[6],
            borderColor: "rgba(54, 162, 235, 0.6)",
            backgroundColor: "rgba(255, 99, 132, 0.0)"
          }
        ]
      },
      graphTime: 0
    };
  }

  componentWillReceiveProps() {
    this.forceUpdate();
  }

  componentWillMount() {
    this.interval = setInterval(() => {
      /*
      var labelArr = [];
      this.props.labels.forEach(val => {
        labelArr.push(`${Math.floor(val / 60)}:${(0.01 * val) % 60}`);
      });*/
      this.setState({
        chartData: {
          labels: this.props.labels,
          datasets: [
            {
              label: "Angry",
              data: this.props.graphData[0],
              borderColor: "rgba(255, 99, 132, 0.6)"
            },
            {
              label: "Disgust",
              data: this.props.graphData[1],
              borderColor: "rgba(139,69,19, 0.6)"
            },
            {
              label: "Scared",
              data: this.props.graphData[2],
              borderColor: "rgba(180, 0, 0, 0.6)"
            },
            {
              label: "Happy",
              data: this.props.graphData[3],
              borderColor: "rgba(10, 160, 20, 0.6)"
            },
            {
              label: "Sad",
              data: this.props.graphData[4],
              borderColor: "rgba(25, 26, 86, 0.6)"
            },
            {
              label: "Surprised",
              data: this.props.graphData[5],
              borderColor: "rgba(210, 210, 86, 0.6)"
            },
            {
              label: "Neutral",
              data: this.props.graphData[6],
              borderColor: "rgba(54, 162, 235, 0.6)"
            }
          ]
        }
      });
    }, 1000);
  }

  render() {
    return (
      <div className="chart">
        <Line
          key="Percentage"
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: "Overall",
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

export default OverallGraph;
