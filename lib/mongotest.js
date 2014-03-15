// mongoose connector for kraken

'use strict'

module.exports = function(){
	var mongoose = require('mongoose'),
		dbURL = 'mongodb://localhost/project_db';

	return function(req, res, next){
		var bathSchema = require('../controllers/bathSchema')(),
			bathCollection = mongoose.model('BathDataItem', bathSchema);
		mongoose.connect(dbURL);
		var db = mongoose.connection;

		console.log('connected... about to find and list bath schema items');
		
		bathCollection.find({}, function( err, item){
			if(err){
				return console.error(err)
			}
			console.log('things found');
			console.log(item);
		});

	}
	
}