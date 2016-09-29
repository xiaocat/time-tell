var express = require('express');
var router = express.Router();
var Note = require('../models/note');

router.get('/add', function(req, res, next){
  res.render('blog/add', {active: 'blog'});
});

router.post('/add', function(req, res, next){
  var params = req.body;
  var note = new Note(params);
  note.save(function(err, note){
    console.log(err);
    console.log(note.ops[0]);
    res.json(note.ops[0]);
  });
});

module.exports = router;
