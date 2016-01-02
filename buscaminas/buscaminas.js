function explosion() {

	alert("BOOM!!!");
	document.write("<h1>Elegiste un area minada!</h1>");
}

function ganaste() {
	document.write("<h1>Has ganado!</h1>");
}

var campo = [[1, 0, 0],
			 [0, 1, 0],
			 [1, 1, 1]];


var x, y;

alert("Estas en un campo minado\n" + "Elije una posicion entre el 0 y el 2 para X y Y")

x = prompt("Posicion en X: (Entre 0 y 2)");
y = prompt("Posicion en Y: (Entre 0 y 2)");


if(x <=2 && y <=2) {
	
	posicion = campo[x][y];

	if(posicion == 1) {
		explosion();
	} else {
		ganaste();
	}

} else {
	document.write("Te saliste del campo!")
}
