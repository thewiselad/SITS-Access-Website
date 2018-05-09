var express = require("express");
var app = express ()
var multer  = require('multer')
var upload = multer()
var sqlite = require('sqlite')

var ApplicationServer = express.static(__dirname);
app.use(ApplicationServer);
app.use(upload.array());

sqlite.open('./database.sqlite') .then(runServer);function runServer(db) {

	app.post('/applcationsthatwehaveobtained', function (req, res) {
		console.log(req.body);

		//the form should be saved to the database
	 	db.run(
			 "INSERT INTO applications (firstname, lastname, kclemailaddress, telephoneextension, department, jobrole, campus, sitsclientaccess, accessrequired, sraccess, sraccessrequired, prscode, kingsid, termsandcond) VALUES ($firstname, $lastname, $kclemailaddress, $telephoneextension, $department, $jobrole, $campus, $sitsclientaccess, $accessrequired $sraccess, $sraccessrequired, $prscode, $kingsid, $termsandcond)",
	 		{
				$firstname: req.body.firstname,
				$lastname: req.body.lastname,
				$kclemailaddress: req.body.kclemailaddress,
				$telephoneextension: req.body.telephoneextension,
				$department: req.body.department,
				$jobrole: req.body.jobrole,
				$campus: req.body.campus,
				$sitsclientaccess: req.body.sitsclientaccess ? true : false,
				$accessrequired: req.body.accessrequired,
				$sraccess: req.body.sraccess  ? true : false
				$sraccessrequired: req.body.sraccessrequired,
				$prscode: req.body.prscode,
				$kingsid: req.body.kingsid,
				$termsandcond: req.body.termsandcond ? true : false


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
	console.log('app listening on http://localhost:3000')
}

// connect to your db then call runServer


