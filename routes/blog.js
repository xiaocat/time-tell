var express = require('express');
var router = express.Router();
var Note = require('../models/note');
var markdown = require('markdown').markdown;

router.get('/', function(req, res, next){
  Note.list(function(err, list){
    list.forEach(function(item){
      item.contents = markdown.toHTML(item.contents);
    });
    res.render('blog/list', {active: 'blog', list: list});
  });
});

router.get('/add', function(req, res, next){
  res.render('blog/add', {active: 'blog'});
});

router.get('/:id', function(req, res, next){
  Note.findOne(req.params.id, function(err, note){
    if(note){
      note.contents = markdown.toHTML(note.contents);
    }
    res.render('blog/show', {active: 'blog', note: note});
  });
});

router.post('/add', function(req, res, next){
  var params = req.body;
  var note = new Note(params);
  note.save(function(err, note){
    res.redirect('/blog');
  });
});

module.exports = router;
