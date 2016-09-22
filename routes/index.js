var express = require('express');
var router = express.Router();
var Time = require('../models/time')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var time = new Time(req.body.text);
  time.save(function(){
    res.render('index', { title: 'Express' });
  });
});


module.exports = router;
