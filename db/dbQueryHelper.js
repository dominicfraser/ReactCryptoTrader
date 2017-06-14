"use strict"
const db = require('./pghelper')

const findById = (req, res, next) => {
  const sql = "SELECT * FROM tests WHERE id = $1"

  const id = req.params.id;

  db.query(sql, [id])
      .then(product => res.json(product[0]))
      .catch(next)
}

const findAll = (req, res, next) => {
  const sql = "SELECT * FROM tests ORDER BY id ASC"

  db.query(sql, [])
      .then(test => res.json(test))
      .catch(next)

}

exports.findAll = findAll
exports.findById = findById