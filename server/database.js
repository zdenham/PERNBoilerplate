const pg = require('pg');
var connectionString = 'postgres://zdenham:@localhost:5432/dbname';

var db = new pg.Client(connectionString);
db.connect();

module.exports = db;