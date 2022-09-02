import React from 'react';
import { useState } from 'react';
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
