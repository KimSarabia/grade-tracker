'use strict';

var db = require('../config/db');
var moment = require('moment');

db.run(`CREATE TABLE IF NOT EXISTS grades (
          assignmentName TEXT,
          studentScore INTEGER,
          totalScore INTEGER,
          letterGrade TEXT
        )`);

exports.get = function(cb) {
  db.all('SELECT * FROM grades', cb);
};

exports.create = function(grade, cb) {
  if(!grade.assignmentName || !grade.studentScore) {
    return cb('Missing required field.')
  }
//TODO: Check and see if these are supposed to be objects
  db.run('INSERT INTO grades (assignmentName, studentScore, totalScore, letterGrade) VALUES (?, ?, ?, ?)',
    grade.assignmentName,
    grade.studentScore,
    grade.totalScore,
    grade.letterGrade,
    cb);
};
