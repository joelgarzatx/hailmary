var express = require('express');
var router = express.Router();

var Profile = require('../models/Profile.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  Profile.find(function(err, docs){
    res.render('board', { profiles: docs });
  });
});

module.exports = router;
