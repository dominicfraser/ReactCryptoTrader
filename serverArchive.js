const express = require('express')
const https = require('https')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const HttpsRequestHelper = require('./db/httpsRequestHelper')


const server = app.listen(4000, function () {
  const host = server.address().address
  const port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})


//// logic to fill up hist data, move when next mvp met
const dayLength = 86400000
//18June[takes one lower]2017
const startDate = Date.UTC(2017, 5, 18)
const urlsToRequest = []

for(let iDate = startDate; iDate > 1310598000000; iDate-=dayLength){
  const url = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=ETH,BTC,USD,EUR,GBP&ts=${iDate}`
  urlsToRequest.push([url, iDate])
// console.log('hist api urls', url)
}

const httpsRequestHelper = new HttpsRequestHelper()

httpsRequestHelper.archiveDayRatesRequest(urlsToRequest[0], urlsToRequest, urlsToRequest[0][1])


