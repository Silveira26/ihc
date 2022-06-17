import { Component } from 'react';
import React from 'react';
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

  const data = {
    labels: ["1", "2", "3", "4", "5","6","7","8","9","10"],
    datasets: [
      {
        label: "Reviews",
        data: [6, 2, 4, 8, 20, 32, 12, 10, 5, 2],
        backgroundColor: "#1976D2"
      }
    ]
  };

  const options = {
    responsive: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
            drawBorder: false,
            borderDash: [3, 3],
            zeroLineColor: "blue"
          },
          categoryPercentage: 0.7,
          barPercentage: 0.9,
          ticks: {
            beginAtZero: true
          }
        }
      ],
      yAxes: [
        {
          display: false,
          gridLines: {
            display: false,
            zeroLineColor: "transparent"
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };


export default class Plot extends Component {
    constructor(props) {
        super(props);
    
        this.state = {}
    
    }

    render() {
        return (
            <div>
                <Bar width="625vw" height="324vw" data={data} options={options} />
            </div>
        );
    }
}
