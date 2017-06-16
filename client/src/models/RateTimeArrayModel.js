class RateTimeArrayModel {
  constructor(optionsHash, toRateCode){
    this.tstamp_unix = optionsHash.tstamp_unix
    this.rate = optionsHash.toRateCode
  }
}

export default RateTimeArrayModel