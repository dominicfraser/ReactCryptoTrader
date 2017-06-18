import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsGeneric from '../components/highchartsGeneric'

class candlestickChart extends React.Component {
    constructor(props){
      super(props)
    }

    render(){
console.log('render candlestickChart')
    const elementToAttachToName = 'stockChart'

    const options = {
      rangeSelector: {
          selected: 1
      },

      title: {
          text: 'AAPL Stock Price'
      },

      series: [{
          type: 'candlestick',
          name: 'AAPL Stock Price',
          data: [
            [1497744000000, 0.1385, 0.1441, 0.1373, 0.1395],
            [1497657600000, 0.1395, 0.1555, 0.1395, 0.1441],
            [1497571200000, 0.1441, 0.1455, 0.1440, 0.1449],

          ],
          dataGrouping: {
              units: [
                  [
                      'week', // unit name
                      [1] // allowed multiples
                  ], [
                      'month',
                      [1, 2, 3, 4, 6]
                  ]
              ]
          }
      }] 
    }

    return (
          <HighchartsGeneric type='stockChart' options={options} element={elementToAttachToName} />
        )
      }

}

export default candlestickChart