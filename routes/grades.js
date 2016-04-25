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
    // req.body  -->  { desc: ??, dueDate: ?? }
    Grade.create(req.body, err => {
      if(err) {
        return res.status(400).send(err);
      }
      res.send();
    });
  });

module.exports = router;
