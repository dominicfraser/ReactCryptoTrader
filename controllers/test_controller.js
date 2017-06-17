const express = require('express')
const testRouter = new express.Router()
const dbQueryHelper = require('../db/dbQueryHelper.js')
const query = new dbQueryHelper


testRouter.get('/', query.findAll)

testRouter.get('/:id', query.findById)

// testRouter.post('/', query.addFromClientUSERDOSOMETHING)


module.exports = testRouter
