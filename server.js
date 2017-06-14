const express = require('express')
const app = express()
const path = require('path')

//
const tests = require('./db/tests')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.use(express.static('client/build'))

//
app.get('/tests/:id', tests.findById);


const server = app.listen(3000, function () {
  const host = server.address().address
  const port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
