const prompt = require("prompt-sync")({ sigint: true });

let tipoVehiculo = parseInt(prompt("Hola, ¿Que tipo de vehiculo trae? Digite 1 si es una moto, digite 2 si es un auto, digite 3 si es un autobus o similar. "));
let litros = parseInt(prompt("¿Cuántos litros consumió? "));

function totalAPagar(Tipo,Litros){
    let total=0;
    switch(Tipo){
        case 1:
            total=Litros*70;
            break;
        case 2:
            total=Litros*86;
            break;
        case 3:
            total=Litros*55;
            break;
        default:
            console.log("No has ingresado ninguna opción valida en cuanto al tipo de vehiculo, vuelve a intentarlo. ");

            break;
    }
    if (total>0){

    if(Litros<=25)
    {
        total=total+50;
    }
    else{
        total=total+25;
    }
    }
    else{
        total=NaN;
    }
  

    return  total;
}

console.log("El total a pagar es: $",totalAPagar(tipoVehiculo,litros))