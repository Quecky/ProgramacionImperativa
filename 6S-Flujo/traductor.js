const prompt = require("prompt-sync")({ sigint: true });

let palabra = prompt("Soy el traductor condicional, ingresa una de las siguientes palabras para conocer su traducción al ingles [casa,perro,pelota,árbol,genio] ");
let traduccion=""
switch(palabra)
{
    case "casa":
        traduccion = "house"
  
        break;
    case "perro":
        traduccion = "dog"

        break;
    case "pelota":
        traduccion = "ball"

        break;
    case "árbol":
        traduccion = "tree"

        break;
    case "genio":
        traduccion = "genius"

        break;
    default:
        console.log("Lo siento, solo traduzco las palabras que te comente, intenta ingresar una de las opciones propuestas.")
        traduccion=NaN
}

console.log("Traducción: "+traduccion )