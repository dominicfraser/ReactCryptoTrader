import React from 'react'
import IntradayAreaChart from '../components/intradayAreaChart'
import CandlestickChart from '../components/candlestickChart'
// import RateTimeArrayModel from '../models/RateTimeArrayModel'
// import AppBar from 'react-toolbox/lib/app_bar';

var usdeur = require('./usdeur')
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      allData: [],
      recentData: [],
      histData: []
    }
    
    this.ApiCommunicatorHelper = new ApiCommunicatorHelper()

    this.addToRecentDataState = this.addToRecentDataState.bind(this)
    this.addToHistDataState = this.addToHistDataState.bind(this)
  }

  render(){
    let currentPrice = "waiting for update"
    if (this.state.allData.length !== 0){currentPrice = this.state.allData[this.state.allData.length-1][1]}


console.log('render main')
    return (
      <div>
        <h1> Main Test </h1>
        <p> Current Price: {currentPrice} </p>
        <IntradayAreaChart data={this.state.allData}/>
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
    this.ApiCommunicatorHelper.allBTC10SecRates((rates) => { this.convertToRateTimeArray(rates, "GBPRate",  this.addToRecentDataState)} )

    // this.ApiCommunicatorHelper.allBTCHistDailyRates((rates) => { this.convertToRateTimeArray(rates, "GBPRate", this.addToHistDataState)} )
  }

  convertToRateTimeArray(rates, rateCode, callback){
    const data = rates.map((rateObject) => {
      const time = rateObject.tstamp_unix * 1
      const toRateCode = rateObject[rateCode] * 1
      return [time, toRateCode]
    })
console.log('data after map', data)
    callback(data)
  }

  addToRecentDataState(newData){
    this.setState({ recentData: newData })

    const histData = this.state.histData.slice()

    let combinedRates = [...newData, ...histData]
    combinedRates = combinedRates.sort(this.compareDatesInNestedArray)
    this.setState({ allData: combinedRates })
// console.log('combinedRates after sort', combinedRates) 
  }

  addToHistDataState(newData){
    this.setState({ histData: newData })
  }

  compareDatesInNestedArray(a, b) {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  }


}

export default Main 