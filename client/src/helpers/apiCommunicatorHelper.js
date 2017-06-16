import ApiRequestHelper from './apiRequestHelper'
import RateModel from '../models/RateModel'

class ApiCommunicatorHelper {
  constructor(){
    this.apiRequestHelper = new ApiRequestHelper()
  }

  allBTC10SecRates(callback){
    this.apiRequestHelper.makeGetRequest("http://localhost:3000/api/tests", (results) => {
      const BTCRates = this.populateRates(results)
      callback(BTCRates)
    })
  }
  

  populateRates(results){
    const BTCRates = results.map((resultObject) => {
      return new RateModel(resultObject)
    })
    return BTCRates
  }

}

export default ApiCommunicatorHelper