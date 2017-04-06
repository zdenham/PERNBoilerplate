const db = require('../database.js');

module.exports = function(app){
	app.get('/', function(req, res){
		var json = {};
		res.status(200).send(json);
	});
};