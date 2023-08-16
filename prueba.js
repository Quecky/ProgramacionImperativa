const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt("¿como te llamas mi cielo?");
console.log(`Hola ${nombre}!`);