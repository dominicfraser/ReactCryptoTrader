"use strict"
const db = require('./pgHelper')

const findAll = (req, res, next) => {
  const sql = "SELECT * FROM tests ORDER BY id ASC"

  db.query(sql, [])
      .then(test => res.json(test))
      .catch(next)
}

const findById = (req, res, next) => {
  const sql = "SELECT * FROM tests WHERE id = $1"

  const id = req.params.id;

  db.query(sql, [id])
      .then(product => res.json(product[0]))
      .catch(next)
}

const add = (req, res, next) => {
  const sql = "INSERT INTO tests (BASE, ETH, BTC, USD, EUR, GBP, tstamp_unix) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *"

  const BASE = req.body.BASE
  const ETH = req.body.ETH
  const BTC = req.body.BTC
  const USD = req.body.USD
  const EUR = req.body.EUR
  const GBP = req.body.GBP
  const tstamp_unix = Date.now()

  db.query(sql, [BASE, ETH, BTC, USD, EUR, GBP, tstamp_unix])
      .then(test => res.json(test[0]))
      .catch(next)
}


exports.findAll = findAll
exports.findById = findById
exports.add = add