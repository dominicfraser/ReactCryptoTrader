import React from 'react'
import ReactDOM from 'react-dom'
import Highcharts from 'highcharts/highstock'

class HighchartsGeneric extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
        <div ref={this.props.element} ></div>
      )
  }

  componentDidMount(){
    const elementToAttachTo = ReactDOM.findDOMNode(this.refs[this.props.element])

    const chart = new Highcharts[this.props.type || 'Chart'](
      elementToAttachTo, this.props.options)
  }

  componentWillUnMount(){
    chart.destroy()
  }


}

export default HighchartsGeneric