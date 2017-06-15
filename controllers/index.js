var express = require('express');
var router = new express.Router();

router.use('/api/tests', require('./test_controller'));

// router.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname + '/../client/build/index.html'))
// })

module.exports = router;






