const express = require('express')
const app = express()
const path = require('path')

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.use(require('./controllers/index'));

app.use(express.static('client/build'))

const server = app.listen(3000, function () {
  const host = server.address().address
  const port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})


// setInterval(() => {
//   //Hit crpyto api
//   //add to db
// } , 10000)

