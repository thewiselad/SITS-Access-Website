var express = require("express");
var app = express ()
var multer  = require('multer')
var upload = multer()

var ApplicationServer = express.static(__dirname);
app.use(ApplicationServer);
app.use(upload.array());


app.post('/applcationsthatwehaveobtained', function (req, res) {
	console.log(req.body);
  res.send('POST to /applcationsthatwehaveobtained')
})

app.listen(3000)