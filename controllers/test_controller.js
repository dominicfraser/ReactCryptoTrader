const express = require('express')
const testRouter = new express.Router()
const query = require('../db/dbQueryHelper.js')


testRouter.get('/', query.findAll)

testRouter.get('/:id', query.findById)

testRouter.post('/', query.add)


module.exports = testRouter
