'use strict';

var db = require('../config/db');
var moment = require('moment');

db.run(`CREATE TABLE IF NOT EXISTS grades (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          createdAt DATETIME,
          assignmentName TEXT,
          studentScore INTEGER,
          totalScore INTEGER,
          letterGrade TEXT
        )`);

exports.get = function(cb) {
  db.all('SELECT * FROM grades', cb);
};

exports.create = function(grade, cb) {
  if(!grade.dueDate || !grade.desc) {
    return cb('Missing required field.')
  }

  var createdAt = moment().unix();

//TODO: Check and see if these are supposed to be objects
  db.run('INSERT INTO grades (createdAt, assignmentName, studentScore, totalScore, letterGrade) VALUES (?, ?, ?, ?, ?)',
    createdAt,
    assignmentName,
    studentScore,
    totalScore,
    letterGrade,
    cb);
};
