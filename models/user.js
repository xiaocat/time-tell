var mongodb = require('./db'),
    crypto = require('crypto');

function User(user) {
  this.name = user.name;
  this.password = user.password;
  this.email = user.email;
};

module.exports = User;

//存储用户信息
User.prototype.save = function(callback) {
  var md5 = crypto.createHash('md5'),
      email_MD5 = md5.update(this.email.toLowerCase()).digest('hex'),
      head = "http://www.gravatar.com/avatar/" + email_MD5 + "?s=48";
  //要存入数据库的用户信息文档
  var user = {
    name: this.name,
    password: this.password,
    email: this.email,
    head: head
  };

  mongodb.operate('users', function(err, collection, mongodb){
    if(err){
      return callback(err);
    }
    collection.insert(user, {
      safe: true
    }, function (err, user) {
      db.close();
      if (err) {
        return callback(err);
      }
      callback(null, user[0]);
    });
  });

};

//读取用户信息
User.get = function(email, callback) {

  mongodb.operate('users', function(err, collection, mongodb){
    if(err){
      return callback(err);
    }
    collection.findOne({
      email: email
    }, function (err, user) {
      mongodb.close();
      if (err) {
        return callback(err);
      }
      callback(null, user);
    });
  });

};
