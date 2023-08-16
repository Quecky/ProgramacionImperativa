const prompt = require("prompt-sync")({ sigint: true });

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
  }
function EsSecreto(numero){
    let NumeroSecreto = getRandomArbitrary(1,11);
    let resultado="";
    if(numero==NumeroSecreto){
        resultado="¡Felicidades! Adivinaste el número secreto"
    }
    else{
        resultado= "Lo siento, el número secreto era "+NumeroSecreto
    }
    return resultado;
}


let intento = prompt("Adivina el numero secreto ");
console.log(EsSecreto(intento))
