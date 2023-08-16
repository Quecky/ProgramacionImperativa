const prompt = require("prompt-sync")({ sigint: true });
//Ejercicio 1
function dame10(inicio)
{   for(let i=inicio+1;i<(inicio+11);i++)
    {
        console.log("10 numeros siguientes a ",inicio);
        console.log(i);
    }
    
}
//dame10(5);

//Ejercicio 2

for(let i=5;i<21;i=i+3)
    {  //console.log("Numeros entre 5 y 20 de tres en tres");
       // console.log(i);
    }

//Ejercicio 3
let suma=0;
for(let i=0;i<101;i++)
    {
        suma = suma+i;
    }
//console.log("Suma del 0 al 100");
//console.log(suma);

//Ejercicio 3 modo Gauss
//console.log("Suma del 0 al 100 modo Gauss");
let sumaG = (100*101)/2;
//console.log(sumaG);

//Ejercicio 4

let numero //= parseInt(prompt("Dame un numero entero positivo "));
if(numero<0)
{
   // console.log("No has ingresado un numero positivo");
}
let multiplicacion=0;
for(let i=1;i<numero;i++)
{
multiplicacion=multiplicacion*i;

}
//console.log("Su factorial es ",multiplicacion);

//Ejercicio 5

function dameFibonacci(limite)
{
    let suma=1
    let anterior=0;
    for(i=0;suma<limite;i++)
    {
        console.log(suma)
        anterior=suma+anterior
        suma=anterior+suma        
        if(anterior<limite)
        {
            console.log(anterior)
        }
        

    }
}
let limiteF = parseInt(prompt("¿Hasta que numero quieres que te de la serie de Fibonacci? "));
dameFibonacci(limiteF);