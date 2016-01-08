var canvasDrawing, canvasContext, t, b;

function Inicio () {

	t = document.getElementById("input-usuario");
	b = document.getElementById("dibujar");

	canvasDrawing = document.getElementById("canvas-body");
	canvasContext = canvasDrawing.getContext("2d");

	b.addEventListener("click", dibujarGrilla);


	canvasContext.beginPath();
	canvasContext.strokeStyle = "red";
	canvasContext.arc(150, 150, 100, (Math.PI * 2), false);
	canvasContext.closePath();
	canvasContext.stroke();

}


function dibujarGrilla() {

	var canvasContextLocal = canvasContext;

	var ancho = 300;
	var alto = 300;

	var input = Number(t.value);

	var lineas = input;
	var limiteX = ancho / lineas
	var limiteY = alto / lineas

	for (var i = 0; i <= limiteX; i++) {
		
		canvasContextLocal.beginPath();
		canvasContextLocal.strokeStyle = "#AAA";
		canvasContextLocal.moveTo(i * 10, 0);
		canvasContextLocal.lineTo(i * 10, 300);		
		canvasContextLocal.stroke();
		canvasContextLocal.closePath();	
	}

	for (var j = 0; j <= limiteY; j++) {
		canvasContextLocal.beginPath();
		canvasContextLocal.strokeStyle = "#AAA";
		canvasContextLocal.moveTo(0, j * 10);
		canvasContextLocal.lineTo(300, j * 10);		
		canvasContextLocal.stroke();
		canvasContextLocal.closePath();	
	}
}