import React from 'react';
import { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { IState as Props } from '../../App';

const AllDogsChart: React.FC<IProps> = ({ allDogs, years }) => {
  let result: any[] = [];
    
  [...allDogs].map(dog => {
    const newItemObj = { name: dog.name, data: dog.rating };
    return result.push(newItemObj);
  });

  const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    title: {
      text: ''
    },
    credits: {
      enabled: false
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
        const self = this;
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
};

type IProps = {
  allDogs: Props["dogs"];
  years: Props["years"];
};


export default AllDogsChart;
