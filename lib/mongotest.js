// mongoose connector for kraken

'use strict'

module.exports = function(){
	var mongoose = require('mongoose'),
		dbURL = 'mongodb://localhost/project_db',
		bathSchema,
		bathCollection,
		db;

	return function(req, res, next){
		if(!bathSchema){
			bathSchema = require('../controllers/bathSchema').schema();
			bathCollection = mongoose.model('BathDataItem', bathSchema);
		}	
		
		if(!db){
			mongoose.connect(dbURL);
			db = mongoose.connection;
		}

		console.log('connected... about to find and list bath schema items');
		
		bathCollection.find({}, function( err, item){
			if(err){
				return console.error(err)
			}
			console.log('things found');
			console.log(item);
		});
	next();
	}
	
}