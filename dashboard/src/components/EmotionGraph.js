import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class EmotionGraph extends Component {
  constructor(props) {
    super(props);
    this.changeGraph = this.changeGraph.bind(this);
    this.state = {
      chartData: {
        labels: this.props.labels,
        datasets: [
          {
            label: "Percentage",
            data: this.props.data,
            backgroundColor: this.props.color
          }
        ]
      },
      graphTime: 0
    };
  }

  changeGraph() {
    this.interval = setInterval(() => {
      const datasetsCopy = this.state.chartData.datasets;
      const dataCopy = datasetsCopy[0].data;
      dataCopy[this.props.currentTime] = 1;

      console.log(`NEW TIME: ${dataCopy}`);

      this.setState({
        chartData: Object.assign({}, this.state.chartData, {
          datasets: [
            {
              label: "Percentage",
              data: dataCopy,
              backgroundColor: this.props.color
            }
          ]
        })
      });
    }, 1000);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        graphTime: this.props.currentTime,
        chartData: {
          labels: this.props.labels,
          datasets: [
            {
              label: "Percentage",
              data: this.props.data,
              backgroundColor: this.props.color
            }
          ]
        }
      });
    }, 1000);
  }

  componentWillReceiveProps() {
    this.forceUpdate();
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
