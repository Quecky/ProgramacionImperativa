const prompt = require("prompt-sync")({ sigint: true });

let edad = parseInt(prompt("Hola, ¿cual es tu edad? "));

let resultado=""
let fantasma  = edad <0 ? "Error, edad inválida. Por favor ingrese un número válido. ":"";
let anos21 = edad>=21 ? "Bienvenid@ a la discoteca, felicidades por llegar a la mayoria de edad. ":"Bienvenid@ a la discoteca, puede divertirse sin bebidas alcoholicas. ";
let nin = edad<18 ? "Disculpa amig@, vaya al parque, este es un lugar para adultos": "";
let impar = edad%2==1 ? "¡Tu edad es impar!":"";

if (fantasma!="") {
    resultado=fantasma;
}
else if (nin!="")
{
    resultado=nin;
}
else{
    resultado=anos21+impar;
}

console.log(resultado);