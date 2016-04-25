'use strict';

var db = require('../config/db');
var moment = require('moment');

db.run(`CREATE TABLE IF NOT EXISTS grades (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          createdAt DATETIME,
          dueDate DATETIME,
          desc TEXT,
          isComplete BOOLEAN DEFAULT 0
        )`);

exports.get = function(cb) {
  db.all('SELECT * FROM grades', cb);
};

exports.create = function(grade, cb) {
  if(!grade.dueDate || !grade.desc) {
    return cb('Missing required field.')
  }

  var createdAt = moment().unix();
  var dueDate = moment(grade.dueDate).unix();

  db.run('INSERT INTO grades (createdAt, dueDate, desc) VALUES (?, ?, ?)',
    createdAt,
    dueDate,
    grade.desc,
    cb);
};
