var express = require("express");
var web = express();
var servidor;

servidor = web.listen("8080", function () {
	console.log("HTTP 200");
});

web.get("/about", function(req, res) {
	res.send("My first node.js server");
});

web.get("/test", function(req, res) {
	res.send("Your input A is " + req.query.a + " and your input B is " + req.query.b);
});