var settings = require('../settings'),
    mongodb = require('mongodb'),
    Db = mongodb.Db,
    Server = mongodb.Server;

module.exports = new Db(settings.db, new Server(settings.host, '27017'), {safe: true});
