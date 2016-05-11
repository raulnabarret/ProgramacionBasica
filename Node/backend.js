var express = require("express");
var parse = require("body-parser");
var web = express();
web.use( parse.urlencoded() );
var servidor;

servidor = web.listen("8080", function () {
	console.log("HTTP 200");
});

web.get("/", function(req, res) {
	res.sendfile("index.html");
});

web.post("/user", function(req, res) {
	res.send("Now you are logged in");
});

web.get("/about", function(req, res) {
	res.send("My first node.js server");
});

web.get("/test", function(req, res) {
	res.send("Your input A is " + req.query.a + " and your input B is " + req.query.b);
});