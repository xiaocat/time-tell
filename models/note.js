var mongodb = require('./db');

function Note(note) {
  this.name = note.name;
  this.head = note.head;
  this.title = note.title;
  this.tags = note.tags;
  this.contents = note.contents;
};

module.exports = Note;

Note.prototype.save = function(callback){
  var date = new Date();
  //存储各种时间格式，方便以后扩展
  var time = {
    date: date,
    year : date.getFullYear(),
    month : date.getFullYear() + "-" + (date.getMonth() + 1),
    day : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
    minute : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
    date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
  };

  //要存入数据库的文档
  var note = {
    name: this.name,
    head: this.head,
    time: time,
    title: this.title,
    tags: this.tags,
    contents: this.contents
  };

  mongodb.operate('notes', function(err, collection, mongodb){
    if(err){
      return callback(err);
    }
    collection.insert(note, {
      safe: true
    }, function (err, note) {
      mongodb.close();
      if (err) {
        return callback(err);
      }
      callback(null, note.ops[0]);
    });
  });

};
