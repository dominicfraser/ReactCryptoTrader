"use strict"
const db = require('./pgHelper')

class dbQueryHelper {

findAll(req, res, next){
  const sql = "SELECT * FROM BTC ORDER BY id ASC"

  db.query(sql, [])
      .then(test => res.json(test))
      .catch(next)
}

findById(req, res, next){
  const sql = "SELECT * FROM tests WHERE id = $1"

  const id = req.params.id;

  db.query(sql, [id])
      .then(product => res.json(product[0]))
      .catch(next)
}

addFromServerToCurrencies(req){
  const tstamp_unix = Date.now() 

  const sql = "INSERT INTO BTC (ETH, BTC, USD, EUR, GBP, tstamp_unix) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *"
  
  const BASE = "BTC"
  const ETH2 = req.BTC.ETH
  const BTC2 = req.BTC.BTC
  const USD2 = req.BTC.USD
  const EUR2 = req.BTC.EUR
  const GBP2 = req.BTC.GBP

  db.query(sql, [ETH2, BTC2, USD2, EUR2, GBP2, tstamp_unix])
      .then()
      .catch()

  // const sql2 = "INSERT INTO ETH (ETH, BTC, USD, EUR, GBP, tstamp_unix) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *"

  // const BASE2 = "ETH"
  // const ETH2 = req.ETH.ETH
  // const BTC2 = req.ETH.BTC
  // const USD2 = req.ETH.USD
  // const EUR2 = req.ETH.EUR
  // const GBP2 = req.ETH.GBP

  // db.query(sql, [ETH2, BTC2, USD2, EUR2, GBP2, tstamp_unix])
  //     .then()
  //     .catch()

  }
}

module.exports = dbQueryHelper