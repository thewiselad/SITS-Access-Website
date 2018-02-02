var sqlite = require ("sqlite")
 
 sqlite.open('./database.sqlite').then(function (db) {
 	db.migrate({ force: 'last' });
 }).catch(function(err){
 	console.log(err.stack)
 });