var express = require("express");
var app = express ()
var multer  = require('multer')
var upload = multer()
var sqlite = require('sqlite')

var ApplicationServer = express.static(__dirname);
app.use(ApplicationServer);
app.use(upload.array());

sqlite.open('./database.sqlite') .then(runServer)

function runServer(db) {

	app.post('/applcationsthatwehaveobtained', function (req, res) {
		console.log(req.body);
		
		//the form should be saved to the database
	 	db.run(
	 		"UPDATE tbl SET name = $name WHERE id = $id", 
	 		{
		        $id: 2,
		        $name: "bar"
		        //@replace with real stuff
		     }
	     ).then(function(){
	  		res.send('We have recieved your form, and we will process it and once approved you will have your credentials sent to you within 1-12 working weeks')
			//the line below is giving a response
	     }).catch(function(err){
	     	console.log(err)
	     	res.send('Sorry, no.')
	     })
	})

	app.listen(3000)

}

// connect to your db then call runServer


