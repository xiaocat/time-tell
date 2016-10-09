var settings = require('../settings'),
    mongoDb = require('mongodb'),
    Db = mongoDb.Db,
    Server = mongoDb.Server,
    mongodb = new Db(settings.db, new Server(settings.host, '27017'), {safe: true});

function mongoOperate(collectionName, callback){
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }
    //读取 集合
    db.collection(collectionName, function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      //集合 操作
      callback(err, collection, mongodb);
    });
  });
}

module.exports = {
  db: mongodb,
  operate: mongoOperate,
  mongoDb: mongoDb
}
