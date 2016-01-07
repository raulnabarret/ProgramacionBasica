function Pokemon(name, life, attack, yell) {

	this.name = name;
	this.life = life;
	this.attack = attack
	this.yell = yell
	this.yelling = function(){
		alert(this.yell);
	};
}

function Inicio(charmander) {

var charmander = new Pokemon("Charmander", 90, 90, "Char!");

	datosPokemon.innerText = "El Pokemon que escogiste es " + charmander.name + ". Tiene " + charmander.life + " de vida y " + charmander.attack + " de ataque " + charmander.yell;
	
}