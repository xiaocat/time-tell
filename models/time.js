var mongodb = require('./db');

function Time(text) {
  this.text = name;
}

module.exports = Time;

Time.prototype.save = function(callback){
  text = this.text;
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }
    //读取 posts 集合
    db.collection('lines', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      //通过用户名、时间及标题查找文档，并把一条留言对象添加到该文档的 comments 数组里
      collection.insert({
        "text": text,
      }, function (err) {
          mongodb.close();
          if (err) {
            return callback(err);
          }
          callback(null);
      });
    });
  });
}
