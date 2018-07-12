var http = require('http');
var https = require('https');
var express = require('express');
var bodyParser=require('body-parser');
var app=express();
var path=require('path');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(__dirname+"/public"));
//reading ssl certificate for https
// var fs = require("fs");
// const options = {
//   key: fs.readFileSync("./cert/44737450_localhost.key"),
//   cert: fs.readFileSync("./cert/44737450_localhost.cert")
// };

// load up login page
app.get('/', function(req, res) {
    res.sendFile(__dirname+'/public/views/login.html');
    console.log("login page loaded"); 
	});

//load modules
var loginRoutes = require("./app/routes/loginRoutes.js");
var signupRoutes = require("./app/routes/signupRoutes.js");

//connection to mongoDB
var mongo=require('mongodb');
var url="mongodb://localhost:27017";
mongo.connect(url,function(err, db){
		if(err) throw err;
		signupRoutes(app,db,path);
		loginRoutes(app,db);
		console.log("connected to mongodb");
});
//https.createServer(options, app).listen(8080); //for secure connection https
app.listen(8080); // for non secure connection
console.log("app is listening on port 8080");