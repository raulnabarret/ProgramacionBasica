var peso;
var pesoEnMarte;

alert("¿Quieres saber tu peso en Marte?");
peso = prompt("¿cual es tu peso?", "70");


peso = parseInt(peso);
pesoEnMarte = (peso/9.81)*(3.711);

alert( pesoEnMarte + "  kg");