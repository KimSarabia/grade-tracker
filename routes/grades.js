'use strict';

var express = require('express');
var router = express.Router();

var Grade = require('../models/grade');

//   /api/grades
router.route('/')
  .get((req, res) => {

    Grade.get((err, grades) => {
      if(err) {
        return res.status(400).send(err);
      }

      res.send(grades);
    });
  })
  .post((req, res) => {
    // req.body  -->  { totalScore: ??, assignmentName: ?? }
    Grade.create(req.body, err => {
      if(err) {
        console.log(err);
        return res.status(400).send(err);
      }
      res.send();
    });
  });

module.exports = router;
