import React from 'react'
import IntradayAreaChart from '../components/intradayAreaChart'

var usdeur = require('./usdeur')


class Main extends React.Component {
  constructor(props){
    super(props)
    // this.state = {
    //   temp: []
    // }

  }

  render(){
    return (
      <div>
        <h1> Main Test </h1>
        <IntradayAreaChart data={usdeur}/>
        <h2>test</h2>

      </div>
      )
  }

}

export default Main 