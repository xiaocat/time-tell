var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/index');
});

router.get('/login', function(req, res, next) {
  res.render('admin/login');
});

router.post('/login', function(req, res, next) {
  User.get(req.body.email, function(err, data){
    res.json(data);
  });
});

module.exports = router;
