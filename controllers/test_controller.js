const express = require('express')
const testRouter = new express.Router()
const dbQueryHelper = require('../db/dbQueryHelper.js')
const query = new dbQueryHelper

const queryArchive = require('../db/archiveDbQueryHelper')

testRouter.get('/', query.findAll)

testRouter.get('/archive', queryArchive.findAll)

testRouter.get('/:id', query.findById)

// testRouter.post('/', query.addFromClientUSERDOSOMETHING)


module.exports = testRouter
