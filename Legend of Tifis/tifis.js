var tablero;
var fondo = {
	imagenURL: "media/fondo.png"
};

function inicio () {

	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;

	fondo.imagen.onload = dibujar;
} 

function dibujar () {

	tablero.drawImage(fondo.imagen, 0, 0);
}