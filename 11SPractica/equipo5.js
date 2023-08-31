/* VERSION ABRAHAM
Punto 1: Variables, Condicionales y Bucles

Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, y 
devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.

*/

//CODIGO



function encontrarMultiplos(numero, limite){
    let array = []
    for(i = numero; i < limite; i = i + numero){
        array.push(i)
    }
    return array
}

console.log(encontrarMultiplos(5,50))




/* 
Punto 2: Arreglos y Objetos
3. Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre, notas (arreglo de números) y aprobado (booleano).

Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba si su promedio de notas es mayor o igual a 70.

*/
//CODIGO
// Crear arreglo de objetos estudiantes

let estudiantes = [
    {nombre: "Juan", 
    notas: [70,70,60,80,90], 
    aprobado: false, 
    
    },
    {nombre: "Beto", 
    notas: [70,70,60,60,50], 
    aprobado: false, 
    },
    {nombre: "Julio", 
    notas: [70,70,70,70,70], 
    aprobado: false, 
    },
    {nombre: "Jack", 
    notas: [0,0,0,0,0], 
    aprobado: false, 
    }
]

// Función para calcular el promedio de notas

function promedio(notas){
    let promedio = 0;
    for(let nota of notas){
            promedio += nota;
    }
    promedio /= notas.length;
    return promedio
}
// Función para determinar si el estudiante aprobó

function aprueba(promedio, aprobatoria = 70){
    return promedio >= aprobatoria
}
// Calcular si los estudiantes aprobaron o no

for(let estudiante of estudiantes){
    estudiante.aprobado = aprueba(promedio(estudiante.notas));
    
}

// Imprimir estado de aprobación de los estudiantes

for(let estudiante of estudiantes){
    console.log(`La aprobacion del estudiante ${estudiante.nombre} es ${estudiante.aprobado}`)
}

/* 
Punto 3: Arreglos y Bucles
7. Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.

*/

//CODIGO

arreglo = [1,2,3,4,5,6,7,8,9,10]

i = 0;
suma = 0;
while(i < arreglo.length){
    if(arreglo[i] % 2 == 0){
        suma += arreglo[i];
    }
    i++;
}

console.log(suma)



/* 
Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y devuelva el producto de los números impares.

Respuesta y Explicación:

*/

//CODIGO

function productoImpares(arreglo){
    /*
    Iniciamos el producto en 1 porque es la identidad de la multiplicación (es decir i * a = a)
    */ 
    let producto = 1;

    for(i = 0; i < arreglo.length; i++){
        /*
        Para verificar si es par usamos el modulo del numero con 2, 
        si es 0 es par, 
        si es 1 es impar
        */
        if(arreglo[i] % 2 == 1){
            producto *= arreglo[i]
        }
    }
    return producto
}

console.log(productoImpares([2,4,6,3,7,9]))




/* 
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.

Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; si es posterior o igual a 2010, el impuesto es del 5%.

*/

//CODIGO

let vehiculo = {
    marca : "chevrolet",
    anio : 1967,
    precio: 100000,
    calcularImpuesto: function(){
        if(this.anio < 2010){
            return this.precio * 0.1
        }else{
            return this.precio * 0.05
        }
    }
}

console.log(vehiculo.calcularImpuesto())

/* VERSION ALDHAIR

Punto 1: Variables, Condicionales y Bucles

Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.

*/
console.log("---- Ejercicio 1 ----");
function encontrarMultiplos(numero, limite) {
  let arr = [];
  for (let i = 0; i < limite; i++) {
    if (i % numero === 0) arr.push(i);
  }
  return arr;
}

console.log(encontrarMultiplos(5, 50));
console.log("---- Fin Ejercicio 1 ----");

/* 
Punto 2: Arreglos y Objetos
3. Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre, notas (arreglo de números) y aprobado (booleano).

Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba si su promedio de notas es mayor o igual a 70.

*/
//CODIGO
// Crear arreglo de objetos estudiantes
console.log("---- Ejercicio 2 ----");
const arrAlumnos = [
  {
    nombre: "Ana Gonzales",
    notas: [90, 100, 100, 80],
    aprobado: false,
  },
  {
    nombre: "Aldhair Vera",
    notas: [100, 100, 100, 100],
    aprobado: false,
  },
  {
    nombre: "Ariana Vera Gonzales",
    notas: [70, 80, 70, 80],
    aprobado: false,
  },
  {
    nombre: "Stormy Vera",
    notas: [80, 70, 90, 70],
    aprobado: false,
  },
];

// Función para calcular el promedio de notas

for (let i = 0; i < arrAlumnos.length; i++) {
  arrAlumnos[i].promedio = function () {
    let sum = 0;
    let size = this.notas.length;
    for (let i = 0; i < size; i++) {
      sum += this.notas[i];
    }
    return sum / size;
  };
}

// console.log(arrAlumnos[0].promedio());

// Función para determinar si el estudiante aprobó

for (let i = 0; i < arrAlumnos.length; i++) {
  arrAlumnos[i].determinarAprobado = function () {
    if (this.promedio() >= 70 && !isNaN(this.promedio())) {
      this.aprobado = true;
      console.log(arrAlumnos[i].nombre, "esta aprobado!", this.aprobado);
    } else {
      this.aprobado = false;
      console.log(arrAlumnos[i].nombre, "no esta aprobado!", this.aprobado);
    }
    return this.aprobado;
  };
}

// console.log(arrAlumnos[0].determinarAprobado());

// function

// Calcular si los estudiantes aprobaron o no
function calcularAprobados() {
  let aprobados = [];

  for (let i = 0; i < arrAlumnos.length; i++) {
    if (arrAlumnos[i].determinarAprobado()) {
      aprobados.push({
        nombre: arrAlumnos[i].nombre,
        promedio: arrAlumnos[i].promedio(),
        aprobado: arrAlumnos[i].aprobado,
      });
    }
  }
  return aprobados;
}

// Imprimir estado de aprobación de los estudiantes
function imprimirAprobados() {
  let aprobados = calcularAprobados();
  for (let i = 0; i < aprobados.length; i++) {
    console.log(aprobados[i]);
  }
}
imprimirAprobados();
console.log("---- Fin Ejercicio 2 ----");

/* 
Punto 3: Arreglos y Bucles
7. Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.

*/
console.log("---- Ejercicio 3 ----");

let i = 0;
let arr = [12, 15, 14, 24, 23, 324, 5343];
let sum = 0;
let evenArr = [];
while (i < arr.length) {
  if (arr[i] % 2 === 0) {
    evenArr.push(arr[i]);
    sum += arr[i];
  }

  i++;
}
console.log("Sum of", evenArr, "=", sum);
console.log("---- Fin Ejercicio 3 ----");

/* 
Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y devuelva el producto de los números impares.

Respuesta y Explicación:

*/
console.log("---- Ejercicio 4 ----");

function product(arr) {
  let prod = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) prod *= arr[i];
  }
  return prod;
}

let arrProd = [12, 15, 14, 24, 324, 3, 5];

console.log(product(arrProd));
console.log("---- Fin Ejercicio 4 ----");

/* 
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.

Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; 
si es posterior o igual a 2010, el impuesto es del 5%.

*/
console.log("---- Ejercicio 5 ----");

const vehiculo2 = {
  marca: "Mazda",
  modelo: "Familia",
  anio: 2000,
  precio: 5000,
};

vehiculo2.impuesto = function () {
  if (this.anio < 2010) {
    return this.precio * 0.1;
  } else {
    return this.precio * 0.05;
  }
};

console.log(vehiculo2.impuesto())
console.log("---- Fin Ejercicio 5 ----");