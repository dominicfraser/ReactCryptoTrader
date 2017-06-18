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
// console.log('newprops.options.series[0].data', newprops.options.series[0].data);

    this.chart.series[0].setData(newprops.options.series[0].data)
  }

  componentDidMount(){
console.log('componentDidMount')
    const elementToAttachTo = ReactDOM.findDOMNode(this.refs[this.props.element])
console.log('options', this.props.options.series[0].data)

    this.chart = new Highcharts[this.props.type || 'Chart'](
      elementToAttachTo, this.props.options)
//set starting extremes, buttons override this
    this.chart.xAxis[0].setExtremes(new Date().setMinutes(new Date().getMinutes()-5), new Date().getTime())

  }

  componentWillUnMount(){
console.log('componentWillUnMount')
    this.chart.destroy()
  }


}

export default HighchartsGeneric