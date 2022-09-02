// {
//   "id": 1,
//   "name": "Basenji",
//   "img": "http://graphics.wsj.com/most-popular-dogs/photo/Basenji.png",
//   "rating": [85, 87, 84, 88, 87]
// },
// {
//   "id": 2,
//   "name": "Shiba Inu",
//   "img": "http://graphics.wsj.com/most-popular-dogs/photo/Shiba-Inu.png",
//   "rating": [46, 45, 45, 45, 42]
// },
// {
//   "id": 3,
//   "name": "Labrador",
//   "img": "http://graphics.wsj.com/most-popular-dogs/photo/Labrador-Retriever.png",
//   "rating": [1, 1, 1, 1, 1]
// },
// {
//   "id": 4,
//   "name": "French Bulldog",
//   "img": "http://graphics.wsj.com/most-popular-dogs/photo/French-Bulldog.png",
//   "rating": [11, 6, 4, 4, 2]
// },
// {
//   "id": 5,
//   "name": "Border Collie",
//   "img": "http://graphics.wsj.com/most-popular-dogs/photo/Border-Collie.png",
//   "rating": [44, 38, 38, 33, 31]
// },
// {
//   "id": 6,
//   "name": "Pembroke Welsh Corgi",
//   "img": "http://graphics.wsj.com/most-popular-dogs/photo/Pembroke-Welsh-Corgi.png",
//   "rating": [24, 20, 15, 10, 67]
// }

import React from 'react';
import { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const AllDogsChart = ({ allDogs, years }) => {
  let result = [];
    
  [...allDogs].map(d => {
    const newItemObj = { name: d.name, data: d.rating };
    return result.push(newItemObj);
  });

  const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    title: {
      text: ''
    },
    xAxis: {
      categories: years,   
    },
    yAxis: {
      tickPositions: [1, 25, 50, 75, 100],
      title: {
        text: 'Rank'
      },
      reversed: true,
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    tooltip: {
      shared: true,
      useHTML: true,
      formatter: function () {
        let self = this;
        let formattedString = "<small></small><table>";
        self.points.forEach((elem) => {
          formattedString +=
            '<tr><td style="color: {series.color}">' +
            elem.series.name +
            " ranked: </td>";
          formattedString +=
            '<td style="text-align: right"><b>' + elem.y + "</b></td></tr>";
        });
        return formattedString;
      }
    },
    series: result,
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver(e) {
              setHoverData(e.target.category)
            } 
          }
        }
      }
    }
  });

  return (
    <HighchartsReact
      allowChartUpdate
      highcharts={Highcharts}
      options={chartOptions}
    />
  )
}

export default AllDogsChart;
