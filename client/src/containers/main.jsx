import React from 'react'
import IntradayAreaChart from '../components/intradayAreaChart'
// import RateTimeArrayModel from '../models/RateTimeArrayModel'
// import AppBar from 'react-toolbox/lib/app_bar';

var usdeur = require('./usdeur')
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      newData: [1]
    }
    
    this.ApiCommunicatorHelper = new ApiCommunicatorHelper()
  }

  render(){
console.log('render main')
    return (
      <div>
        <h1> Main Test </h1>
        <IntradayAreaChart data={this.state.data}/>
        <h2> test </h2>
      </div>
      )
  }

  componentDidMount(){
    this.callApiThenMapResult()
    setInterval(() => {
    this.callApiThenMapResult()
    } , 10000)
  }


  callApiThenMapResult(){
    const recentRates = this.ApiCommunicatorHelper.allBTC10SecRates((rates) => { this.convertToRateTimeArray(rates, "GBPRate")} )
console.log('recentRates', recentRates)

    const histRates = this.ApiCommunicatorHelper.allBTCHistDailyRates((rates) => { this.convertToRateTimeArray(rates, "GBPRate")} )

    const combinedRates = [...recentRates, ...histRates]
    this.setState({ data: combinedRates }) 
    

    // return combinedRates
    return recentRates
  }

  convertToRateTimeArray(rates, rateCode){
    const data = rates.map((rateObject) => {
      const time = rateObject.tstamp_unix * 1
      const toRateCode = rateObject[rateCode] * 1
      return [time, toRateCode]
    })
console.log('data after map', data)

    return data
  }

}

export default Main 