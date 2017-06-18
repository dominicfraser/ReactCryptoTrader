import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsGeneric from '../components/highchartsGeneric'

class IntradayAreaChart extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
console.log('render intradayAreaChart')
    const elementToAttachToName = 'stockChart'

    const options = {
      title: {
          text: 'BTC/GBP over time'
      },

      subtitle: {
          text: 'Using ordinal X axis'
      },

      xAxis: {
          gapGridLineWidth: 0,
          // ordinal: false
      },

      rangeSelector: {
          buttons: [{
              type: 'minute',
              count: 1,
              text: '1m'
          }, {
              type: 'hour',
              count: 1,
              text: '1h'
          }, {
              type: 'day',
              count: 1,
              text: '1D'
          }, {
              type: 'all',
              count: 1,
              text: 'All',
              // dataGrouping: {
              //     forced: true,
              //     units: [['hour', [1]]]
              // }
          }],
          selected: 2,
          inputEnabled: false
      },

      series: [{
          name: 'AAPL',
          type: 'area',
          data: this.props.data,
          // gapSize: 5,
          tooltip: {
              // valueDecimals: 2
          },
          fillColor: {
              linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1
              },
              stops: [
                  [0, Highcharts.getOptions().colors[0]],
                  [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
              ]
          },
          threshold: null
      }],

      credits: {
              enabled: true,
              href: "https://www.cryptocompare.com/api/?javascript#introduction",
              style: { "cursor": "pointer", "color": "#999999", "fontSize": "10px" },
              text: "Market data by cryptocompare.com"
          },
   }


  return (
      <HighchartsGeneric type='stockChart' options={options} element={elementToAttachToName} />
    )
  }

}

export default IntradayAreaChart