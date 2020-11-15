import React, { Component, useState, useEffect, useRef } from 'react';
import Chartjs from 'chart.js';

const chartConfig = (gradient) => {
  return({
    type: 'line',
    data: {
      labels: ["22", "23", "24", "25", "26",
      "27", "28", "29", "30", "31",
      "32", "33"],
      datasets: [{
        label: "Expected value",
        data: [{x: "22", y: 140}, {x: "23", y: 145},
          {x: "24", y: 150}, {x: "25", y: 160},
          {x: "26", y: 180}, {x: "27", y: 200},
          {x: "28", y: 215}, {x: "29", y: 220},
          {x: "30", y: 230}, {x: "31", y: 220},
          {x: "32", y: 200}, {x: "33", y: 240}],
        backgroundColor: gradient,
        type: 'line',
        borderColor: 'rgb(0, 179, 255)',
        borderWidth: 3,
        pointBorderColor: 'rgb(255, 255, 255)',
        pointBackgroundColor: 'rgb(128, 0, 255)',
        pointHoverBackgroundColor: 'rgb(128, 0, 255)',
        pointHoverBorderColor: 'rgb(255, 255, 255)',
        pointBorderWidth: 2,
        pointHoverRadius: 10,
        pointHoverBorderWidth: 1,
        pointRadius: 5,
      }]
    },
    options: {
      responsive: true,
      legend: {
        display: false
      },
      hover: {
        mode: 'index'
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Age'
          },
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: 'Value'
          },
          gridLines: {
            display: false
          }
        }]
      }
    }
  });
}
const PlanningChart = () => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const ctx = document.getElementById("planningChart").getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(1, "rgba(128, 255, 251, 0)");
    gradient.addColorStop(0, "rgba(128, 255, 251, 1)");
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig(gradient));
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);


  const updateDataset = (datasetIndex, newData) => {
    chartInstance.data.datasets[datasetIndex].data = newData;
    chartInstance.update();
  };

  return(
    <div>
      <canvas id={"planningChart"} ref={chartContainer} />
    </div>
  )
}

export default PlanningChart;