class RateModel {
  constructor(optionsHash){
    this.ETHRate = optionsHash.eth
    this.BTCRate = optionsHash.btc
    this.USDRate = optionsHash.usd
    this.EURRate = optionsHash.eur
    this.GBPRate = optionsHash.gbp
    this.tstamp_unix = optionsHash.tstamp_unix
  }
}

export default RateModel