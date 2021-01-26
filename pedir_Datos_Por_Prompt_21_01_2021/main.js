//PROMPT
let nombre = prompt("Por favor digite su nombre.");
let numero = prompt("Por favor digite un numero.");
saludar("Hola, ¿como estás, " +nombre+ "?");
despedir("El numero digitado es: " + numero + ". Adiós.")


function saludar(p1){
	console.log(p1);
}
function despedir(p2){
	console.log(p2);
}