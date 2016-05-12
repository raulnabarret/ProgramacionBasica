var arDrone = require("ar-drone");
var myDrone = arDrone.createClient();

var express = require("express");
var web = express();


function battery () {
	console.log("Battery is " + myDrone.battery());
}

function takeoff () {
	myDrone.config("control:altitude_max", 100000);
	myDrone.takeoff();
	rotate();
}

function rotate () {
	myDrone.stop();
	myDrone.calibrate(0);
}

function landing () {
	myDrone.stop();
	myDrone.land();

}

servidor = web.listen(8080, function () {
	console.log("HTTP 200");
});

web.get("/", function (req, res){
	res.sendfile("drone.html");
	battery();
});

web.get("/despegar", function (req, res){
	console.log("Despegar");
	battery();
	takeoff();
	res.sendfile("drone.html");
});

web.get("/aterrizar", function (req, res){
	console.log("Aterrizar");
	battery();
	landing();
	res.sendfile("drone.html");
});