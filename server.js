var express = require('express');
var bodyParser=require('body-parser');
var session = require('express-session');
var app=express();
var path=require('path');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(__dirname+"/public"));
app.use(session({
  secret: 'geox',
  resave: true,
  saveUninitialized: false,
  //cookie: { secure: true }
}));

//load modules
var mainRoutes = require("./app/routes/mainRoutes.js")
var loginRoutes = require("./app/routes/loginRoutes.js");
var signupRoutes = require("./app/routes/signupRoutes.js");

mainRoutes(app,path);

//connection to mongoDB
var mongo=require('mongodb');
var url="mongodb://localhost:27017";
mongo.connect(url,function(err, db){
		if(err) throw err;
		signupRoutes(app,db,path);
		loginRoutes(app,db,path);
		console.log("connected to mongodb");
});
app.listen(8080);
console.log("app is listening on port 8080");