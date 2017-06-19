const express = require('express')
const https = require('https')
const app = express()
const path = require('path')
const dbQueryHelper = require('./db/dbQueryHelper.js')
const query = new dbQueryHelper
const HttpsRequestHelper = require('./db/httpsRequestHelper')


const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.use(require('./controllers/index'))

app.use(express.static('client/build'))

const server = app.listen(3000, function () {
  const host = server.address().address
  const port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})

  // Hit crpyto api //add to db
setInterval(() => {
  const url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC&tsyms=ETH,BTC,USD,EUR,GBP'

  const httpsRequestHelper = new HttpsRequestHelper()

  httpsRequestHelper.standardHttpsRequest(url, query.addFromServerToCurrencies)  
} , 10000)

