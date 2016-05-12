var arDrone = require("ar-drone");

var express = require("express");
var web = express();

servidor = web.listen(8080, function () {
	console.log("HTTP 200");
});

web.get("/", function (req, res){
	res.sendfile("drone.html");
});

web.get("/despegar", function (req, res){
	console.log("Despegar");
	res.sendfile("drone.html");
});

web.get("/aterrizar", function (req, res){
	console.log("Aterrizar");
	res.sendfile("drone.html");
});