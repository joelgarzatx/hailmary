var express = require('express');
var router = express.Router();

var Profile = require('../models/Profile.js');

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  var profile = new Profile({
    name: req.body.inputEmail,
    account: req.body.inputEmail,
    url: req.body.inputEmail
  });
  profile.save(function(err) {
    if (err) res.send('error ' + err);
    else res.render('index', { title: 'add', user: profile.name });
  });
});

module.exports = router;
