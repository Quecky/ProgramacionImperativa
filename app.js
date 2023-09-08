const prompt = require("prompt-sync")({ sigint: true });

/* 

 - Operadores De Comparación En JavaScript

... < ... : Indica que la condición de la izquierda es menor que la de la derecha.
... > ... : Indica que la condición de la izquierda es mayor que la de la derecha.
... >= ... : Indica que la condición de la izquierda es mayor o igual que la de la derecha.
... <= ... : Indica que la condición de la izquierda es menor o igual que la de la derecha.
... == ...: Hace una comparación blanda entre dos valores. Es decir, JavaScript hace una coerción de datos, para que ambos sean del mismo tipo y pueda compararlos.
...===... : Indica que la condición de la izquierda tiene una igualdad estricta respecto a la de la derecha. Es decir, evalúa que el contenido y el tipo de dato sea el mismo. Al usar este comparador evitarás bugs a futuro.

--------------------------------------------------------------------------------------

¿Qué Diferencia Hay Entre = Y ==?

El = asigna un valor. Es decir, es un operador de asignación.

Por ejemplo:
*/

// let edad2 = 27;

/* 
En cambio, == compara que dos valores sean iguales.

Por ejemplo:
*/

// if (10 == 15) {
// }

/* 
Operadores Lógicos Y De Desigualdad En JavaScript: 

todos los operadores lógicos y de desigualdad retornarán valores booleanos. 
La ventaja de usarlos es que permiten agrupar muchas condiciones y refactorizar el código, haciéndolo más rápido, legible y eficiente.

... || ... : Este operador, llamado "o", permite comparar un valor con 2, o más, condiciones. 
Para que la estructura dé como resultado true, alcanza con que solo 1 de ellas se cumpla. Si ninguna condición es true, la estructura será false.

Ejemplo: 

Para que || devuelva true, alcanza con que solo 1 sea verdadera.
*/
true || true; // La estructura es true
true || false; // La estructura es true
false || true; // La estructura es true
false || false; // La estructura es false
/*
... && ... : Este operador, llamado "y", permite comparar un valor con 2, o más, condiciones. 
Para que la estructura dé como resultado true, todas las condiciones deben cumplirse. Basta con que 1 de las condiciones no se cumpla para que toda 
la estructura sea false .

Para que && devuelva true, todas las expresiones deben ser verdaderas:
*/
true && true; // La estructura es true
true && false; // La estructura es false
false && true; // La estructura es false

/*
... != ... : Este operador, llamado "diferente de..." o "de desigualdad", permite comparar un valor con 2, o más, condiciones. 
Para que la estructura dé como resultado true, todas las condiciones deben ser diferentes entre sí. Basta con que 1 de las condiciones 
no sea diferente para que toda la estructura sea false .

false != true; // La estructura es true

 - Diferencia Blanda (!=) O Estricta (!==)

Al igual que con los operadores de comparación, la diferencia entre dos valores puede ser blanda o estricta. 
Mientras que, en la primera, se evaluará solo el contenido, en la segunda se considerará tanto el contenido como el tipo de dato.


- Operador De Negación En JavaScript

Los operadores de negación sirven para escribir código más optimizado, prolijo y elegante.

 ! niega el valor booleano de cada dato. Es decir que, si es true devolverá false y si es false, retornará true.


!true = false
!false = true
!!false = false
!!true = true
!!1 = true
!0 = true
!!0 = false
!"" = true
!" " = false

Metodo o funcion para booleanos = Boolean()
*/

//console.log("------------------------------------------------------");

/*  - Declara 3 variables. Siempre teniendo en cuenta que los nombres deben ser descriptivos:
Numérica
String
Booleana */

// let anios = 10;
// let nombre = "Juan";
// let esMayor = false;

/*  
- Mostrarlas por la consola en 3 console.log distintos (uno por cada variable) 
*/

// console.log(anios);
// console.log(nombre);
// console.log(esMayor);

/* Ahora modifica tus console.log para que ahora se muestran las 3 variables en el mismo console.log */

// console.log(anios + " " + nombre, esMayor);
// console.log(`${anios}${nombre}${esMayor}`);

/* 
- Tomémonos un rato para armar las variables de los ejercicios 1 y 2 de esta guía. Recuerden guardarlos como archivos separados en la carpeta correspondiente.  
*/

//Variables de Mario:

// let puntos = 0;
// let cantidadDeMonedas = 0;
// let nivel = 1;
// let cantidadDeVidas = 3;
// let honguitosDeMario = 5;
// let jugador = "Sammy";

//Variables de una persona

// let diaDeNacimiento = 20;
// let anioDeNacimiento = 1995;
// let nombre1 = "Luciano";
// let estaVivo = true;

/* 
Solicitar que el usuario ingrese su nombre utilizando el prompt. Imprimilo en consola mostrando la etiqueta “Nombre:” 
seguida del valor ingresado por ejemplo “Nombre: Juan”
*/
// let nombre2 = prompt("Ingrese su nombre: ");
// console.log(`Hola ${nombre2}!!!`); // `${}` = temple literal (otra forma de concatnación ademas del simbolo +)


// let temperatura = prompt ("Ingrese su temperatura: ");

// if (temperatura < 37.5) {
//     console.log ('Prioridad baja');
// }
// else {
//     console.log ('Prioridad alta');
// }
//--------------------------------------------------------
// let edad = parseInt (prompt ("Cual es tu edad: "));

// if (edad >=21) {
//     console.log ("Puedes ingresar al bar")
//     let numeroSecreto = 10;
//     let loQueDiceElUsuario = parseInt(prompt ("Cual es el numero secreto? "));
//     if (loQueDiceElUsuario === numeroSecreto) {
//         console.log ("Puedes ingresar a la fiesta secreta")
//     } 
//     else {
//         console.log ("No puedes ingresar!")
//     }
// }
// else {
//     console.log ("No puedes ingresar al bar")
// }
//--------------------------------------------------------

// if (condicion1) {
// // si la condicion es true, nos devuelve este bloque de codigo
// } else if (condicion2) {
// // si la condicion es true, nos devuelve este bloque de codigo
// } else {
// // y sino, nos termina de devolviendo este bloque de codigo
// }

// let edad1 = parseInt (prompt("Ingresa tu edad "))

// if (edad1 < 18 ) {
//     console.log ("No puedes ingresar al bar")
// } else if ( edad1 >= 18 && edad1 < 21) {
//     console.log ("Puedes ingresar al bar, pero no puedes tomar alcohol")
// } else {
//     console.log ("Puedes ingresar al bar y tambien tomar alcohol")
// }

//--------------------------------------------------------

// let procedencia = prompt ("De que continente procede?: ")

// if (procedencia === "Europa") {
//     console.log ("Pase por el lado de la izquierda, para hacer un chequeo")
    
//     let femenino = "Femenino"
//     let genero = prompt ("Cual es su genero: ")

//     if (genero === femenino) {
//         console.log ("Buenisimo")
//     } else {
//         console.log  ("Bien por ti")
//     }

// } else if ( procedencia === "Asia") {
//     console.log ("Pase por el lado de la derecho, para hacer un chequeo")
// } else {
//     console.log ("Bienvenido")
// }

//--------------------------------------------------------


// let edad = 21

// if  (edad <0)  {
// 	console.log ("Error, edad inválida. Por favor ingrese un número válido");
// } else if (edad >= 21) {
// 	console.log ("Bienvenido!!. Felicidades ya eres mayor de edad");
//      if (edad % 2 === 1) {
//         console.log ("¿Sabías que tu edad es impar?");
//     }
// }

//--------------------------------------------------------

// let vehiculo = prompt ("Ingresa el modelo del vehiculo: ");
// let litrosConsumidos =  parseInt (prompt ("Ingresa los litros consumidos: "));

// function totalAPagar (vehiculo, litrosConsumidos) {

//     let total ;

//     switch (vehiculo) {
//         case vehiculo = "coche":
//             total = 86;
//             break;
//         case vehiculo = "moto" :
//             total = 70;
//             break;
//         case vehiculo = "autobus" :
//             total = 55;
//             break;
//         default:
//             console.log ("Vehiculo no valido");
//         return;
//     }

//--------------------------------------------------------

//     let precioTotal = litrosConsumidos * total;

//     if (litrosConsumidos >= 0 && litrosConsumidos <= 25){
//             precioTotal += 50;
//     } else {
//             precioTotal += 25;
//     } 
//     console.log(`Total a pagar: ${precioTotal.toFixed(2)}`);
// }
// totalAPagar(vehiculo,litrosConsumidos);

//--------------------------------------------------------

// let tipoSandwich = prompt ("Ingresa el tipo de sandwich: ");
// let tipoPan = prompt ("Ingresa el tipo de pan: ");
// let adicQueso =  prompt ("¿Agregas queso a tu orden? true/false: ");
// let adicTomate =  prompt ("¿Agregas tomate a tu orden? true/false: ");
// let adicLechuga =  prompt ("¿Agregas lechuga a tu orden? true/false: ");
// let adicCebolla =  prompt ("¿Agregas cebolla a tu orden? true/false: ");
// let adicMayonesa =  prompt ("¿Agregas mayonesa a tu orden? true/false: ");
// let adicMostaza =  prompt ("¿Agregas mostaza a tu orden? true/false: ");


// function pagoTotal (tipoSandwich , tipoPan , adicCebolla, adicLechuga, adicMayonesa, adicMostaza, adicQueso, adicTomate){
//     let tipo, pan;

//     switch (tipoSandwich) {
//         case tipoSandwich = "pollo":
//         case tipoSandwich = "pollo":
//             tipo = 150;
//             break;
//         case tipoSandwich = "carne":
//             tipo = 200;
//             break;
//         case tipoSandwich = "veggie":
//             tipo = 100;
//             break;
//         default:
//             console.log ("Sandwich no esta en la carta");
//             break;
//     }

//     switch (tipoPan) {
//         case tipoPan = "blanco":
//             pan = 50;
//             break;
//         case tipoPan = "negro":
//             pan = 60;
//             break;
//         case tipoPan = "s/gluten" :
//             pan = 75;
//             break;
//         default:
//             console.log ('Pan no disponible');
//             break;
//     }

//     let subTotal =  tipo + pan;

//     adicQueso === "true" ? subTotal +=20 : subTotal;
//     adicTomate === "true" ? subTotal +=15 : subTotal;
//     adicLechuga === "true" ? subTotal +=10 : subTotal;
//     adicCebolla === "true" ? subTotal +=15 : subTotal;
//     adicMayonesa === "true" ? subTotal +=5 : subTotal;
//     adicMostaza === "true" ? subTotal +=5 : subTotal;

//     return subTotal
// }
// let precio = pagoTotal(tipoSandwich , tipoPan , adicCebolla, adicLechuga, adicMayonesa, adicMostaza, adicQueso, adicTomate);

// console.log (`El precio total de tu orden es: ${precio}` );

//--------------------------------------------------------

// let pasajero = 1

// while (pasajero <= 20) {
//     console.log ("Puede pasar, su asiento es el: " + pasajero);
//     pasajero++
// }

//--------------------------------------------------------

// let palabraMagica = "abrete sesamo!";

// let intento = prompt ("Indicame cual es la palabra magica: ")

// while (intento != palabraMagica) {
//     console.log ("Esa palabra es incorrecta");
//     intento = prompt ("Intentalo de nuevo: ");
// }

// console.log ("Bienvenidos a la caverna de los 40 ladrones");

//--------------------------------------------------------

// let i = 1
// let final = 5
// let acumuladora = 0

// while (i <= final) {
//     acumuladora += i
//     i++
// }

// console.log (acumuladora)

//--------------------------------------------------------

// let i = 1
// let j = 1
// let final = 5

// while (i <= final) {

//     j= 1

//     while (j <= final){
//         console.log ( i + " - " + j)
//         j++
//     }

//     i++
// }

//--------------------------------------------------------

// let input

// while (!(input = prompt ("Escriba su nombre por favor: "))){
//     console.log ("No recibimos la informacion")
// }
// console.log ("Su nombre es: " + input)

// for (let i = 1; i <=10 ; i++){
//     console.log (i)
// }

//--------------------------------------------------------

// let i = 0;

// while (i < 6) {
//   if (i === 3) {
//     break;
//   }
//   i = i + 1;
// }

// console.log(i);

//--------------------------------------------------------

//FIZZBUZZ

// for (let i = 1; i <= 16 ; i ++){

//     if (i % 3 === 0 && i % 5 === 0){
//         console.log ("FIZBUZZ")
//     } else if (i % 3 === 0){
//         console.log ("FIZZ")
//     } else if ( i % 5 === 0) {
//         console.log ("BUZZ")
//     } else {
//         console.log (i)
//     }
// }

//--------------------------------------------------------

// function fizzBuzz (palabra1, palabra2, num1, num2, num3){
// for (let i = 1; i <= num3 ; i ++){

//     if (i % num1 === 0 && i % num2 === 0){
//         console.log (palabra1 + palabra2)
//     } else if (i % num1 === 0){
//         console.log (palabra1)
//     } else if ( i %  num2 === 0) {
//         console.log (palabra2)
//     } else {
//         console.log (i)
//     }
// }
// }

// fizzBuzz ("Digital", "House", 2, 7, 17)

//--------------------------------------------------------

//SUMATORIA

// function sumattion (numero) {
//     let suma = 0

//     for (let i = 0 ; i <= numero ; i++) {
//         suma += i // sumamos el numero con sus anteriores
//     }
//     return console.log (suma)
// }

// sumattion (8)

//--------------------------------------------------------

// BUCLES Y REPITICIONES

// let numero = parseInt(prompt ("Ingresa un numero: "))

// function incremento (numero) {
//     let valor = 10

//     for (let i=0 ; i < valor ; i++) {
//          console.log (numero +=1)
//     }   
// }

// incremento (numero)

//-----------------------------------------

// for (let i=5; i<= 20; i+=3){
//    console.log (i)
// }

//-----------------------------------------

// let suma = 0

// for (let i = 0 ; i<= 100 ; i++) {
//     suma += i
// }
// return console.log (suma)

//-----------------------------------------

// let entero = parseInt(prompt("Ingresa un numero entero positivo: "))

// if (entero === 0 || entero === 1) {
//     console.log ("El factorial es 1") 
// } else if (entero < 0) {
//     console.log ("Debes de ingresar un número positivo")
// } else {
//     let factorial = 1
//     for (let i = 2 ; i <= entero ; i++) {
//         factorial *= i
//     }
//     console.log(factorial)
// }

//-----------------------------------------

//F(n) = F(n-1) + F(n-2), donde F(n) representa el término en la posición "n" de la serie.
// Por ejemplo:

// F(0) = 0
// F(1) = 1
// F(2) = F(1) + F(0) = 1 + 0 = 1
// F(3) = F(2) + F(1) = 1 + 1 = 2
// F(4) = F(3) + F(2) = 2 + 1 = 3
// Y así sucesivamente...

//-----------------------------------------

// let valor = parseInt(prompt("Ingresa un numero: "))

// function fibonacci (numero){
//     let fibona = [0 , 1]

//    for ( let i = 2; i < numero ; i++) {
//         fibona[i] = fibona [i -1] + fibona [i - 2]
//    }
//    return fibona
// }


// console.log("Secuencia de Fibonacci de " + valor + " números:")
// console.log(fibonacci(valor))

//-----------------------------------------

// function tablaDeMultiplicar(numero) {
//      let i = 1;
//      while (i <= 10) {
//           let resultado = numero * i;
//           console.log (numero + '*' + i + '=' + resultado);
//           i++;
//      }
// }
//  tablaDeMultiplicar(4);

 //-----------------------------------------

// let productos = ["iphone" , "smarttv" , "auriculares"]

// let word = "hello"

// word [0] //h
// word [1] //e
// word [2] //l
// word [4] //o
// word [5] //undefined

// let index = 3

// word [index]

// let largoDelString = word.length // cantidad de caracteres

// word[largoDelString] // undefined

// word[largoDelString - 1] // devolveria la "o" de hello

// let saludo = "Bienvenidos a nuestra pagina"

// saludo [1] // i
// saludo [5] // e
// saludo [11] // en este caso no va a devolver el espacio ya que lo toma como un caracter mas.

// let index = 2
// saludo[index] // e

// let longitud = saludo.length // devuelve el largo del texto

// saludo[longitud] // undefined

// saludo[longitud - 1] // a


//let amigos = ['Juan' , 'Pepe' , 'Jorge', 'Francisco']

// amigos [0] // Juan
// amigos [1] // Juan
// amigos.length // devuelve 4 que es largo del arreglo
// amigos[amigos.length]// nos devuelve undefinde ya que la posicion mas alta en el arreglo amigos es el 3 y yo voy a querer buscar la posicion numero 4
// amigos[amigos.length - 1] //Francisco

// amigos[0] = 'Juancito' // cambiamos el valor de Juan por Juancito
// amigos[3] = 'Pancho' // cambiamos el valor de Francisco por Pancho


// amigos[4] = 'Marco' //agregamos en una nueva posicion 
// amigos[5] = 'Mateo' //agregamos en una nueva posicion 

// como quedaria el arreglo ['Juan' , 'Pepe' , 'Jorge', 'Francisco'. 'Marco', 'Mateo']


//let amigos = ['Juan' , 'Pepe' , 'Jorge', 'Francisco', 'Marco', 'Mateo']

//amigos[10] = "Nicolas" // le agregamos en la posicion numero 10 el nombre Nicolas

// como quedaria el arreglo: ['Juan' , 'Pepe' , 'Jorge', 'Francisco', 'Marco', 'Mateo', empty * 4 , "Nicolas"]
// si llamamos a una de esas posiciones te devolveria undefine y puedes agregar datos en esas posiciones vacias


//let coleccionRandom = ['Hola' , 22, true , null, function(){console.log("hello")} , ['hola' , ' chau']]

//coleccionRandom [4] // Al acceder al quinto elemento del arreglo coleccionRandom, ubicamos a la funcion pero no la ejecutamos : function(){console.log("hello")}

//coleccionRandom [4] () // en este caso no solo accedemos a la la posicion numero 4, de la funcion, sino que a esa funcion la ejecutamos: hello

//coleccionRandom [5] // accedemos a la posicion numero 5 y lo que nos devuelve es el arreglo : ['hola' , ' chau']
//coleccionRandom [5][0] // de esta manera accedemos al valor que esta en la posicion uno del subarreglo : "hola"

// let frase = 'Hola!, soy Carli';

// let licenciada = frase.slice(12,16);

// console.log (licenciada)


//-----------------------------------------

// let numbers = [22,33.54,66,72]
// console.log(numbers[numbers.leng])

//PARTE 2

// Ejercicio 1

//let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

// console.log (peliculas[2])

// Ejercicio 2

// function mayuscula (array) {

//     let numeroElemento = array.length;
//     let cambiados = []

//     for (let i=0 ; i < numeroElemento ; i++) {
//         let cambio = array[i].toUpperCase();
//         cambiados.push(cambio)
//     }
//     return cambiados
//}
// console.log (mayuscula(peliculas))

// Ejercicio 3

// let peliAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
// let pelis = mayuscula(peliculas)
// let animada = mayuscula(peliAnimadas)

// function anidados (array1 , array2) {

//     for (let elemento of array2) {
//         array1.push(elemento)
//     }
// return array1
// }
// console.log (anidados(pelis, animada))


// Ejercicio 4

// let peliAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
// let pelis = mayuscula(peliculas)
// let animada = mayuscula(peliAnimadas)

// function anidados (array1 , array2) {

//     let eliminado = array2.pop()

//     for (let elemento of array2) {
//         array1.push(elemento)
//     }
// return eliminado
// }

// let eliminado = anidados(pelis, animada)
// console.log ("El elemento eliminado es: " + eliminado)
// console.log ("El nuevo array es: " + pelis)

// Ejercicio 5

// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// /* Te piden crear una función que compare las calificaciones e indique si son iguales
// o diferentes. Te confirman que están en el orden adecuado y que solo traen
// valores numéricos del 1 al 10.
// PD: los elementos de los scores tanto de Asia como de Europa corresponden en
// orden al del array resultante de combinar películas con películas animadas. Es
// decir, el primer elemento del array de películas general corresponde al primer
// elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.*/

// function compara(arrayx, arrayi){

//     for (let i = 0 ; i < arrayx.length; i++){
//         if (arrayx[i] === arrayi[i]){
//             console.log(`Las calificaciones para la película ${i + 1} son iguales.`)
//         } else {
//             console.log (`Las calificaciones para la película ${i + 1} son diferentes.`)
//         }
//     }
// }

// compara (asiaScores, euroScores)

//Array inverso

// let peliAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

// function imprimirInverso (conjunto){
//     let total = conjunto.length

//         while (total > 0) {
//             console.log (conjunto[total - 1])
//             total --
//         }

// }

// imprimirInverso(peliAnimadas)

// function inversor (elementos) {
//     let nuevoArray = []

//         for (let i = elementos.length -1 ; i >=0; i--) {
//             nuevoArray.push(elementos[i])
//         }
//     return nuevoArray
// }

// console.log (inversor (peliAnimadas))

// sumaArray()

// let sumas = [4, 6, 9]

// function sumaArray(arreglo) {

//     let sumatoria = 0

//     if (arreglo.length > 3) {

//         console.log ("Este arreglo tiene mas de 3 elementos")

//     } else if (arreglo.length < 3) {

//         console.log ("Este arreglo tiene menos de 3 elementos")

//     } else {
        
//         for (let i = 0 ; i < arreglo.length ; i++) {
//             sumatoria += arreglo [i]
//         }
//         return sumatoria
//     }
// }

// console.log (sumaArray (sumas))


// ARRAY.JOIN()

// let frase = ['h','o','p','o']

// function join(palabra) {

//     let string = ""

//     if (palabra.length > 4) {

//          console.log ("Este arreglo tiene mas de 4 elementos")
        
//     } else if (palabra.length < 4) {
        
//         console.log ("Este arreglo tiene menos de 4 elementos")
        
//     } else {
                
//         for (let i = 0 ; i < palabra.length ; i++) {
//             string += palabra [i]
//         }   
//         return string
//     }
// }

// console.log (join(frase))

/* 
Punto 1: Variables, Condicionales y Bucles

Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.

*/

//CODIGO

// function encontrarMultiplos (numero, limite) {

//     let multiplos = [];
       
//         for (let i =0 ; i < limite ; i+=numero) {
//             multiplos.push(i)
//         }
//     return multiplos;

// }

// console.log (encontrarMultiplos(5, 50));


/* 
Punto 2: Arreglos y Objetos
3. Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre, notas (arreglo de números) y aprobado (booleano).

Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba si su promedio de notas es mayor o igual a 70.

*/
//CODIGO
// Crear arreglo de objetos estudiantes
/*
let estudiantes = [
    {nombre : 'Fernando',
     notas : [70,100],
// Función para calcular el promedio de notas
     aprobado : function () {
        let sumaNotas = 0;
        for (let i = 0; i < this.notas.length; i++) {
            sumaNotas += this.notas[i];
        }
        let promedio = sumaNotas / this.notas.length;
// Función para determinar si el estudiante aprobó
        return promedio>=70;
        }
    },
    
    {nombre : 'Alejandra',
     notas : [10,50],
     aprobado : function () {
        let sumaNotas = 0;
        for (let i = 0; i < this.notas.length; i++) {
            sumaNotas += this.notas[i];
        }
        let promedio = sumaNotas / this.notas.length;
        return promedio>=70;
        }
    },

    {nombre : 'Juan',
     notas : [90,10],
     aprobado : function () {
        let sumaNotas = 0;
        for (let i = 0; i < this.notas.length; i++) {
            sumaNotas += this.notas[i];
        }
        let promedio = sumaNotas / this.notas.length;
        return promedio>=70;
        }
    },

    {nombre : 'Ximena',
     notas : [50,70],
     aprobado : function () {
        let sumaNotas = 0;
        for (let i = 0; i < this.notas.length; i++) {
            sumaNotas += this.notas[i];
        }
        let promedio = sumaNotas / this.notas.length;
        return promedio>=70;
        }
    }
]
// Imprimir estado de aprobación de los estudiantes
console.log (estudiantes[1].aprobado())
*/

/* 
Punto 3: Arreglos y Bucles
7. Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.

*/

//CODIGO

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14];
// let indice = 0;
// let sumaPares = 0;

// while (indice < numeros.length) {
//     if (numeros[indice] % 2 === 0) {
//         sumaPares += numeros[indice];
//     }
//     indice++;
// }

// console.log("La suma de los números pares es: " + sumaPares);


/* 
Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y devuelva el producto de los números impares.

Respuesta y Explicación:

*/

//CODIGO

// let multiplicacion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14];

// function producto(arreglo) {
   
//     let productos = 1;

//     for (let i=0 ; i < arreglo.length; i++) {
        
//         if (arreglo[i] % 2 !== 0) {
//             productos *= arreglo[i];
//         }
// }
//     return productos;
// }

// let resultado = (producto(multiplicacion))
// console.log("El producto de los números impares es: " + resultado);


/* 
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.

Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; 
si es posterior o igual a 2010, el impuesto es del 5%.

*/

//CODIGO

// let vehiculo = {
//     marca : "Mitsubishi",
//     modelo : 'lento',
//     anio : 1987,
//     precio : 3400,
//     impuesto : function() {
//         if (this.anio < 2010) {
//             return this.precio * 0.10
//         } else {
//             return this.precio * 0.05
//         }
//     }
// }

// En JavaScript, puedes crear un objeto y luego agregar métodos al mismo fuera del objeto utilizando la notación de punto. Aquí tienes un ejemplo:

//javascript
// Crear el objeto
// let vehiculo = {
//     marca: "Toyota",
//     modelo: "Corolla",
//     anio: 2015,
//     precio: 20000
// };

// Definir el método fuera del objeto
// function calcularImpuesto(anio, precio) {
//     if (anio < 2010) {
//         return precio * 0.1;
//     } else {
//         return precio * 0.05;
//     }
// }

// Llamar al método
// console.log("Marca:", vehiculo.marca);
// console.log("Modelo:", vehiculo.modelo);
// console.log("Año:", vehiculo.anio);
// console.log("Precio:", vehiculo.precio);
// console.log("Impuesto a pagar:", calcularImpuesto(vehiculo.anio, vehiculo.precio));


// En este ejemplo, hemos definido el método `calcularImpuesto` fuera del objeto `vehiculo`. 
//Luego, podemos llamar al método pasando las propiedades `anio` y `precio` del objeto como argumentos para calcular el impuesto.

// Crear el objeto
// let vehiculo = {
//     marca: "Toyota",
//     modelo: "Corolla",
//     anio: 2015,
//     precio: 20000
// };

// Definir el método fuera del objeto
// function calcularImpuesto(anio, precio) {
//     if (anio < 2010) {
//         return precio * 0.1;
//     } else {
//         return precio * 0.05;
//     }
// }

// Llamar al método
// console.log("Marca:", vehiculo.marca);
// console.log("Modelo:", vehiculo.modelo);
// console.log("Año:", vehiculo.anio);
// console.log("Precio:", vehiculo.precio);
// console.log("Impuesto a pagar:", calcularImpuesto(vehiculo.anio, vehiculo.precio));

