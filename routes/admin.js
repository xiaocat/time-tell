var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/index');
});

router.get('/login', function(req, res, next) {
  res.render('admin/login');
});

router.post('/login', function(req, res, next) {
  res.render('admin/login');
});

module.exports = router;
