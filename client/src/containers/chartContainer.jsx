import React from 'react'
import ReactDOM from 'react-dom'
import Highcharts from 'highcharts'

class ChartContainer extends React.Component {



  render(){
    return (
        <div ref='stockChart' ></div>
      )
  }

  componentDidMount(){
    const div = ReactDOM.findDOMNode(this.refs.stockChart)
console.log('div', div) 
console.log('Highcharts', Highcharts) 

    var chart = new Highcharts.Chart({
      chart: {
        type: "bar",
        renderTo: div,
        backgroundColor: "rgba(69, 53, 53, 0.3)",
      },
      title: {
        text: ""
      },
      series: [
      {
        name: "Your Money",
        data: [10],
        color: "#ffd24d"
      }
      ],
      xAxis: {
        categories: ["£"],
        labels: {
            style:{
              color: "white"
          }
        }
      },
      yAxis: {
        title: {
          text: "Your Money",
          style: {
            color: "white"
          }
        },
        min: 0,
        max: 100,
        labels: {
            style:{
              color: "white"
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      }
    });
  }

}

export default ChartContainer