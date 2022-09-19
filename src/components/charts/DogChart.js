import React from 'react';
import { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


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
    setChartOptions({
      series: [
        { data: rating }
      ]
    });
  }, [rating]);

  return (
    <HighchartsReact
      allowChartUpdate
      highcharts={Highcharts}
      options={chartOptions}
    />
  )
}

export default DogChart;