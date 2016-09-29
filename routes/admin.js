var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/*', checkLogin);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/index', {active: 'home'});
});

router.get('/login', function(req, res, next) {
  res.render('admin/login', {active: 'home'});
});

router.post('/login', function(req, res, next) {
  User.get(req.body.email, function(err, data){
    req.session.user = data;
    res.redirect('/admin');
  });
});

function checkLogin(req, res, next) {
  if (!req.session.user && req.originalUrl !== '/admin/login') {
    req.flash('error', '未登录!');
    res.redirect('/admin/login');
  }
  if (req.session.user && req.originalUrl == '/admin/login') {
    req.flash('error', '已登录!');
    res.redirect('/admin');
  }
  next();
}

module.exports = router;
