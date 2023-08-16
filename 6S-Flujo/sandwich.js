const prompt = require("prompt-sync")({ sigint: true });

let baseS = prompt("Hola ¿cual será la base del sandwich? Opciones: pollo, carne, veggie ");
let pan = prompt("¿Con que tipo de pan lo quieres? Opciones: blanco, negro, s/gluten ");
console.log("A continuación debe escribir true o false, true si quiere agregar el ingrediente o false si no, en la siguiente lista de ingredientes.")
let queso = prompt("¿Quiere agregar queso al sandwich? ")=="true"?true:false;
let tomate = prompt("¿Quiere agregar tomate al sandwich? ")=="true"?true:false;
let lechuga = prompt("¿Quiere agregar lechuga al sandwich? ")=="true"?true:false;
let cebolla = prompt("¿Quiere agregar cebolla al sandwich? ")=="true"?true:false;
let mayonesa = prompt("¿Quiere agregar mayonesa al sandwich? ")=="true"?true:false;
let mostaza = prompt("¿Quiere agregar mostaza al sandwich? ")=="true"?true:false;



function calculaCostoSandwich(Base,Pan,Queso,Tomate,Lechuga,Cebolla,Mayonesa,Mostaza){
    let total = 0;
    switch(Base){
        case "pollo":
            total = 150;
            break;
        case "carne":
            total = 200;
            break;
        case "veggie":
            total = 100;
            break;
        default:
            console.log("No seleccionaste una base de sandwich de las opciones, vuelve a intentarlo. ")
            total=NaN;
    }
    switch(Pan)
    {
        case "blanco":
            total=total+50;
            break;
        case "negro":
            total=total+60;
            break;
        case "s/gluten":
            total=total+75;
            break;
        default:
            console.log("No seleccionaste una tipo de pan de las opciones, vuelve a intentarlo. ")
            total=NaN;
    }
 

    let queso_p = Queso===true ? 0:20;
    let tomate_p = Tomate===true ? 0:15;
    let lechuga_p = Lechuga===true ? 0:10;
    let cebolla_p = Cebolla===true ? 0:15;
    let mayonesa_p = Mayonesa===true ? 0:5;
    let mostaza_p = Mostaza===true ? 0:5;

    total = total +queso_p+lechuga_p+cebolla_p+mayonesa_p+mostaza_p+tomate_p;

    return total;

}

console.log("El total sería $",calculaCostoSandwich(baseS,pan,queso,tomate,lechuga,cebolla,mayonesa,mostaza))