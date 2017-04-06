const pg = require('pg');
var connectionString = 'postgres://YOURUSERNAME:@localhost:5432/db';

var db = new pg.Client(connectionString);
db.connect();

module.exports = db;