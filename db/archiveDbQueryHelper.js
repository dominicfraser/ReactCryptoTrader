"use strict"

const pg = require('pg'),
    config = require('./config'),
    databaseURL = "postgres://user@localhost/cryptoArchive"

    const query = function (sql, values, dontLog) {
    if (!dontLog) {
console.log(sql, values)
    }
    return new Promise((resolve, reject) => {
        pg.connect(databaseURL, function (err, conn, done) {
            if (err) return reject(err)
            try {
                conn.query(sql, values, function (err, result) {
                    done()

                    if (err) {
                        reject(err)
                    } else {
                        resolve(result.rows)
                    }
                })
            }
            catch (e) {
                done()
                reject(e)
            }
        })
    })
}

const addHistDailyData = (apiRateInfo, day) => {

    const tstamp_unix = day

    const sql = "INSERT INTO btc_daily (ETH, BTC, USD, EUR, GBP, tstamp_unix) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *"
    
    const BASE = "BTC"
    const ETH2 = apiRateInfo.BTC.ETH
    const BTC2 = apiRateInfo.BTC.BTC
    const USD2 = apiRateInfo.BTC.USD
    const EUR2 = apiRateInfo.BTC.EUR
    const GBP2 = apiRateInfo.BTC.GBP

    query(sql, [ETH2, BTC2, USD2, EUR2, GBP2, tstamp_unix])
        .then()
        .catch()

}

const findAll = (req, res, next) => {
  const sql = "SELECT * FROM btc_daily ORDER BY id ASC"

  query(sql, [])
      .then(test => res.json(test))
      .catch(next)
}



exports.addHistDailyData = addHistDailyData
exports.findAll = findAll