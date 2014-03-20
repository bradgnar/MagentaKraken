'use strict';


module.exports = function () {
	var mongoose = require('mongoose'),
		dbURL = 'mongodb://localhost/project_db',
		bathSchema,
		bathCollection,
		db;
 	this.save = function(documents) {
 		if(!bathSchema){
			bathSchema = require('../controllers/bathSchema').schema();
			bathCollection = mongoose.model('BathDataItem', bathSchema);
		}
		if(!db){
			mongoose.connect(dbURL);
			db = mongoose.connection;
		}

		bathCollection.save(documents, function(err, newItem){
			if(err) {
				console.log(err.message);
				return
			}
			console.log('just saved a document');
		});
	// 	MongoClient.connect(MONGOHQ_URL, function(err, db) {
	// 	collection = db.collection('test');
	// 		collection.insert(documents, function(err, docs) {
	// 		if (err) {
	// 			return console.error(err)
	// 		}
	// 		console.log('just inserted ', docs.length, ' new documents!')
	// 	});

	// });
};
	this.findAll = function(callback) {
		if(!bathSchema){
			bathSchema = require('../controllers/bathSchema').schema();
			bathCollection = mongoose.model('BathDataItem', bathSchema);
		}
		if(!db){
			mongoose.connect(dbURL);
			db = mongoose.connection;
		}
		bathCollection.find({}, function( err, item){
			if(err){
				return console.error(err)
			}
			console.log('things found');
			console.log(item);
			if(callback){
				callback.call(item);
			}
		});
	}
}