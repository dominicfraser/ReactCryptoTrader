"use strict"

const pg = require('pg'),
    config = require('./config'),
    databaseURL = config.databaseURL

    exports.query = function (sql, values, dontLog) {

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