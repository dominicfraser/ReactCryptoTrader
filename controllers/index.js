var express = require('express');
var router = new express.Router();

// var path = require('path')

// var MakeupGetter = require('./MakeupGetterES5');
// import MakeupGetter from './MakeupGetterES6'

router.use('/api/tests', require('./test_controller'));

// router.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname + '/../client/build/index.html'))
// })

module.exports = router;






