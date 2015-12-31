
function rand(min, max) { 
	var numberRand = Math.floor( Math.random() * (max - min + 1) +  min);
	return numberRand;
}

var rock = 0;
var paper = 1;
var scissors = 2;

var options = ["Piedra", "Papel", "Tijera"]

var user;
var cpu = rand(0,2); 

user = prompt("¿Qué eliges \nPiedra: 0\nPapel: 1\nTijera: 2", 0);
alert("Elegiste " + options[user]);
alert("JavaScript eligió " + options[cpu]);

if(user == 0) {
	if(cpu == rock) {
		alert("Empate!")
	} else if (cpu == scissors) {
		alert("Tú ganas!!!")
	} else if (cpu == paper) {
		alert("Tú pierdes!!!")
	} 
} else if (user == 1) {
	if(cpu == paper) {
		alert("Empate!")
	} else if (cpu == rock) {
		alert("Tú ganas!!!")
	} else if (cpu == scissors) {
		alert("Tú pierdes!!!")
	} 
} else if (user == 2) {
	if(cpu == scissors) {
		alert("Empate!")
	} else if (cpu == paper) {
		alert("Tú ganas!!!")
	} else if (cpu == rock) {
		alert("Tú pierdes!!!")
	} 
}
