const prompt = require("prompt-sync")({ sigint: true });

let puntuacion = prompt("Favor de puntuar la pelicula vista con las opciones [Muy mala, Mala, Mediocre, Buena, Muy buena] ");

switch(puntuacion){
    case "Muy mala":
        console.log("Calificaste la pelicula como "+puntuacion+". Lo lamentamos mucho. Agradecemos tu visita.")
        break;
    case "Mala":
        console.log("Calificaste la pelicula como "+puntuacion+". Lo lamentamos mucho. Agradecemos tu visita.")
        break;
    case "Mediocre":
        console.log("Calificaste la pelicula como "+puntuacion+". Lo lamentamos mucho. Agradecemos tu visita.")
        break;
    case "Buena":
        console.log("Calificaste la pelicula como "+puntuacion+". Nos alegra. Agradecemos tu visita.")
        break;
    case "Muy buena":
    console.log("Calificaste la pelicula como "+puntuacion+". Nos alegra. Agradecemos tu visita.")
    default:
        console.log("Ingresaste un valor inválido")
}