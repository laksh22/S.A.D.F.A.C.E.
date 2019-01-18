import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class EmotionGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: ["0:10", "0:20", "0:30", "0:40", "0:50", "0:60"],
        datasets: [
          {
            label: "Percentage",
            data: [10, 25, 43, 52, 82, 60],
            //backgroundColor:'green',
            backgroundColor: this.props.color
          }
        ]
      }
    };
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
