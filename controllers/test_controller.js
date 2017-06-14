
//  res.sendFile( __dirname + '/index.html' )

const express = require('express');
const testRouter = new express.Router();
const query = require('../db/dbQueryHelper.js')


// filmRouter.post('/', function(req, res){ //add
//   films.push ( req.body.film )
//   res.json(films)
// })

testRouter.get('/:id', query.findById);

testRouter.get('/', query.findAll);

// filmRouter.delete('/:id', function(req, res){ //delete
//   films.splice(req.params.id, 1)
//   res.json(films)
// })

// filmRouter.put('/:id', function(req, res){ //update
//   // var updatedFilm = req.body.film
//   var updatedFilm = new Film({
//     title: req.body.title,
//     actors: req.body.actors
//   })
//   films[req.params.id] = updatedFilm
//   res.json(films)
// })


module.exports = testRouter;
