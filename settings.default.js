var secret = 'time-tell';
var host = 'localhost';

module.exports = {
  cookieSecret: secret,
  db: 'time',
  host: host,
  port: '27017',
  url: 'mongodb://' + host + '/' + secret
};
