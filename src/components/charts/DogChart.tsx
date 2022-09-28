import React from 'react';
import { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { IState as Props, Dog } from '../../App';

const DogChart = ({ years, dogRating }) => {
  const [rating, setRating] = useState([]);
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
    legend: {
      enabled: false,
    },
    yAxis: {
      tickPositions: [1, 25, 50, 75, 100],
      title: {
        text: 'Rank'
      },
      reversed: true,
    },
    series: [
      {
        name: 'Rank',
        colorByPoint: true,
        data: rating
      }
    ],
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

  useEffect(() => {
    const copyDataRating = [...dogRating];
    setRating(copyDataRating);
    // console.log('dog updated in child', dogRating);
  }, [dogRating]);


  useEffect(() => {
    const newLineData = [{
      name: 'Rank',
      colorByPoint: true,
      data: rating,
    }];
    const newOptions = { ...chartOptions, series: newLineData };
    setChartOptions(newOptions);
  }, [rating]);

  return (
    <HighchartsReact
      allowChartUpdate
      highcharts={Highcharts}
      options={chartOptions}
    />
  )
};

type IProps = {
  years: Props["years"];
  dogRating?: Dog["rating"];
};

export default DogChart;