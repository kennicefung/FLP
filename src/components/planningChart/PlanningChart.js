import React, { Component, useState, useEffect, useRef } from 'react';
import { ResponsiveLine } from '@nivo/line'
/* import Chartjs from 'chart.js';

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
} */
const data = [
  {
    "id": "japan",
    "color": "hsl(94, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 121
      },
      {
        "x": "helicopter",
        "y": 89
      },
      {
        "x": "boat",
        "y": 257
      },
      {
        "x": "train",
        "y": 291
      },
      {
        "x": "subway",
        "y": 221
      },
      {
        "x": "bus",
        "y": 296
      },
      {
        "x": "car",
        "y": 76
      },
      {
        "x": "moto",
        "y": 231
      },
      {
        "x": "bicycle",
        "y": 90
      },
      {
        "x": "horse",
        "y": 291
      },
      {
        "x": "skateboard",
        "y": 142
      },
      {
        "x": "others",
        "y": 72
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(38, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 273
      },
      {
        "x": "helicopter",
        "y": 267
      },
      {
        "x": "boat",
        "y": 208
      },
      {
        "x": "train",
        "y": 220
      },
      {
        "x": "subway",
        "y": 107
      },
      {
        "x": "bus",
        "y": 3
      },
      {
        "x": "car",
        "y": 254
      },
      {
        "x": "moto",
        "y": 209
      },
      {
        "x": "bicycle",
        "y": 145
      },
      {
        "x": "horse",
        "y": 201
      },
      {
        "x": "skateboard",
        "y": 230
      },
      {
        "x": "others",
        "y": 236
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(26, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 86
      },
      {
        "x": "helicopter",
        "y": 219
      },
      {
        "x": "boat",
        "y": 165
      },
      {
        "x": "train",
        "y": 209
      },
      {
        "x": "subway",
        "y": 163
      },
      {
        "x": "bus",
        "y": 63
      },
      {
        "x": "car",
        "y": 115
      },
      {
        "x": "moto",
        "y": 266
      },
      {
        "x": "bicycle",
        "y": 88
      },
      {
        "x": "horse",
        "y": 222
      },
      {
        "x": "skateboard",
        "y": 198
      },
      {
        "x": "others",
        "y": 131
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(37, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 66
      },
      {
        "x": "helicopter",
        "y": 14
      },
      {
        "x": "boat",
        "y": 6
      },
      {
        "x": "train",
        "y": 106
      },
      {
        "x": "subway",
        "y": 153
      },
      {
        "x": "bus",
        "y": 186
      },
      {
        "x": "car",
        "y": 0
      },
      {
        "x": "moto",
        "y": 265
      },
      {
        "x": "bicycle",
        "y": 162
      },
      {
        "x": "horse",
        "y": 133
      },
      {
        "x": "skateboard",
        "y": 74
      },
      {
        "x": "others",
        "y": 220
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(189, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 116
      },
      {
        "x": "helicopter",
        "y": 97
      },
      {
        "x": "boat",
        "y": 67
      },
      {
        "x": "train",
        "y": 155
      },
      {
        "x": "subway",
        "y": 53
      },
      {
        "x": "bus",
        "y": 155
      },
      {
        "x": "car",
        "y": 181
      },
      {
        "x": "moto",
        "y": 271
      },
      {
        "x": "bicycle",
        "y": 94
      },
      {
        "x": "horse",
        "y": 295
      },
      {
        "x": "skateboard",
        "y": 221
      },
      {
        "x": "others",
        "y": 252
      }
    ]
  }
]
class PlanningChart extends React.Component {
  render() {
    return (
      <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle'
      }}
      axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle'
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
          {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemBackground: 'rgba(0, 0, 0, .03)',
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
      motionConfig="slow"
  />
    )
  } 
}

export default PlanningChart;