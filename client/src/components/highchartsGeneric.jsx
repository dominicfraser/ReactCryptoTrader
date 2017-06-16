import React from 'react'
import ReactDOM from 'react-dom'
import Highcharts from 'highcharts/highstock'

class HighchartsGeneric extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
console.log('render highchartsGeneric')
    return (
        <div ref={this.props.element} ></div>
      )
  }

  componentWillReceiveProps(newprops) {
console.log('componentWillReceiveProps')
console.log('newprops.options.series[0].data', newprops.options.series[0].data);
    this.chart.update({ series:[{
          name: 'AAPL',
          type: 'area',
          data: newprops.options.series[0].data,
          gapSize: 5,
          tooltip: {
              valueDecimals: 2
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
      }]  
    })

    this.chart.xAxis[0].setExtremes(new Date().setMinutes(new Date().getMinutes()-5), new Date().getTime())
  }

  componentDidMount(){
console.log('componentDidMount')
    const elementToAttachTo = ReactDOM.findDOMNode(this.refs[this.props.element])
console.log('options', this.props.options.series[0].data)

    this.chart = new Highcharts[this.props.type || 'Chart'](
      elementToAttachTo, this.props.options)
  }

  componentWillUnMount(){
console.log('componentWillUnMount')
    this.chart.destroy()
  }


}

export default HighchartsGeneric