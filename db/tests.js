"use strict";

let db = require('./pghelper');

let findById = (req, res, next) => {
    let id = req.params.id;

    let sql = "SELECT * FROM tests WHERE id = $1";

    db.query(sql, [id])
        .then(product => res.json(product[0]))
        .catch(next);
};

exports.findById = findById;