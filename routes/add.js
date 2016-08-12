var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  const user = req.body.user;
  res.render('index', { title: 'add', user });
});

module.exports = router;
