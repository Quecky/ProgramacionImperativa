const edades = [11,12,15,18,25,22,10,33,18,5];

let getEdadesM18 = (aEdades) =>{
    let edadesM18=[];
    for(let i=0;i<=aEdades.length;i++)
    {
  
        if(aEdades[i]<18)
        {
            edadesM18.push(aEdades[i]);
        }
    }
    return edadesM18;
}

//console.log(getEdadesM18(edades));

let getEdadesMI18 = (aEdades2)=>
{
  
    let edadesMI18=[];
    for(let i=0;i<aEdades2.length;i++)
    {
      
  
        if(aEdades2[i]>=18)
        {
            edadesMI18.push(aEdades2[i]);
        }
    }
    return edadesMI18;

}

//console.log(getEdadesMI18(edades));

let getEdades18 = (aEdades3)=>
{
  
    let edades18=[];
    for(let i=0;i<aEdades3.length;i++)
    {
      
  
        if(aEdades3[i]==18)
        {
            edades18.push(aEdades3[i]);
        }
    }
    return edades18;

}

//console.log(getEdades18(edades));
let menor=Math.min(...edades);
let mayor=Math.max(...edades);
let sacarPromedio2=(arr)=>{ 
    let sum=0;
    for(let j=0;j<arr.length;j++)
    {
        sum=sum+arr[j];
    } 
    return sum/arr.length; };

let incrementarUno=(arr)=>{ 
        for(let j=0;j<arr.length;j++)
        {
            arr[j]=1+arr[j];
        } 
        return arr; };
let edadesI= incrementarUno(edades)

//console.log(edadesI);


const arrayCuentaas = 
[
    {
        titular:'Arlene Barr',
        estaHabilitada:false,
        saldo:3253.40,
        edadTitular:33,
        tipoCuenta:"sueldo"
    },
    {
        titular:'Roslyn Torres',
        estaHabilitada:false,
        saldo:3229.45,
        edadTitular:27,
        tipoCuenta:"sueldo"
    },
    {
        titular:'Cleo Lopez',
        estaHabilitada:true,
        saldo:1360.19,
        edadTitular:34,
        tipoCuenta:"corriente"
    },
    {
        titular:'Daniel Malone',
        estaHabilitada:true,
        saldo:3627.12,
        edadTitular:30,
        tipoCuenta:"sueldo"
    },
    {
        titular:'Ethel Leon',
        estaHabilitada:true,
        saldo:1616.52,
        edadTitular:34,
        tipoCuenta:"sueldo"
    },
    {
        titular:'Harding Mitchell',
        estaHabilitada:true,
        saldo:1408.68,
        edadTitular:25,
        tipoCuenta:"corriente"
    },
]

function getCuentasEdadesMen30(arr)
{
    let newarr=[];
    for(let cuenta of arr)
    {
        if(cuenta.edadTitular<30)
            newarr.push(cuenta)
    }
    return newarr;
}

let cuentasEdadesMen30 = getCuentasEdadesMen30(arrayCuentaas);
//console.log(cuentasEdadesMen30);
let cuentasEdadesMayOIg30 = function (arr)
{
    let newarr=[];
    for(let cuenta of arr)
    {
        if(cuenta.edadTitular>=30)
            newarr.push(cuenta)
    }
    return newarr;

}
//console.log(cuentasEdadesMayOIg30(arrayCuentaas));

let cuentasEdadesMenOIg30=(arr=arrayCuentaas)=>
{
    let newarr=[];
    for(let cuenta of arr)
    {
        if(cuenta.edadTitular<=30)
            newarr.push(cuenta)
    }
    return newarr;
}
//console.log(cuentasEdadesMenOIg30());

let cuentaMasJoven =(arr=arrayCuentaas)=>
{
    let CuentasEdades=[];
    for(let cuenta of arr)  
        CuentasEdades.push(cuenta.edadTitular)
    let masJoven=Math.min(...CuentasEdades)
    let CuentaMasJoven;
    for(let cuenta of arr)  
    {
        if(cuenta.edadTitular==masJoven)
            CuentaMasJoven=cuenta;
    }

    return CuentaMasJoven;
}

function getCuentasHab(arr=arrayCuentaas)
{
    let newarr=[];
    for(let cuenta of arr)
    {
        if(cuenta.estaHabilitada==true)
            newarr.push(cuenta)
    }
    return newarr;
}

//console.log(getCuentasHab());

function getCuentasDes(arr=arrayCuentaas)
{
    let newarr=[];
    for(let cuenta of arr)
    {
        if(cuenta.estaHabilitada==false)
            newarr.push(cuenta)
    }
    return newarr;
}
//console.log(getCuentasDes());


let getCuentaMenSal =(arr=arrayCuentaas)=>
{
    let CuentasSaldos=[];
    for(let cuenta of arr)  
        CuentasSaldos.push(cuenta.saldo)
    let minSald=Math.min(...CuentasSaldos)
    let CuentaMinSal;
    for(let cuenta of arr)  
    {
        if(cuenta.saldo==minSald)
            CuentaMinSal=cuenta;
    }

    return CuentaMinSal;
}


//console.log(getCuentaMenSal());

let getCuentaMaxSal =(arr=arrayCuentaas)=>
{
    let CuentasSaldos=[];
    for(let cuenta of arr)  
        CuentasSaldos.push(cuenta.saldo);
    let mayorSaldo=Math.max(...CuentasSaldos);

    let CuentaMaxSal;
    for(let cuenta of arr)  
    {
        if(cuenta.saldo==mayorSaldo)
            CuentaMaxSal=cuenta;
    }

    return CuentaMaxSal;
}

//console.log(getCuentaMaxSal());

function generarID(arr=arrayCuentaas)
{
    let i = 0;

    for(let cuenta of arr)
    {
            cuenta.id=i;
            i++;
    }

}
generarID()

function buscarPorId(arr=arrayCuentaas,id)
{
    for(let cuenta of arr)
    {

    }

}

/*

Punto 1: Variables, Condicionales y Bucles

Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.

*/

function encontrarMultiplos(numero,limite)
{
    let multiplos=[];
    for(let i=0;i<limite;i++)
    {
        if(i%numero==0)
        {
            multiplos.push(i);
        }
    }
    return multiplos;

}
let multiplosCc=encontrarMultiplos(5,50);
//console.log(multiplosCc);
/* 
Punto 2: Arreglos y Objetos
3. Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre, notas (arreglo de números) y aprobado (booleano).

Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba si su promedio de notas es mayor o igual a 70.

como hicieron el ejercicio de comparar los tipos de datos sin usar el typeof?

Yo hice 
(dato === true || dato === false) para saber si era booleano y 
(dato !== true  && dato !== false) para saber si era string xd

Otra solucion:
if ((String(valor1) === valor1 && String(valor2) === valor2) ||
    (Boolean(valor1) === valor1 && Boolean(valor2) === valor2)) {
    return "Son del mismo tipo";
} else {
    return "No son del mismo tipo";
}

*/

let estudiantes=[
    {nombre:'Dalia',
    notas:[6,6,6],
    aprobado:true},
    {nombre:'Elena',
    notas:[10,10,10],
    aprobado:true},
    {nombre:'Fanny',
    notas:[10,9,10],
    aprobado:true},
    {nombre:'Mariana',
    notas:[9,9,10],
    aprobado:true}]

function agregarFuncionPromedio(arrayO)
{


    for(let i=0;i<arrayO.length;i++)
    {
        let sum = 0;
       
        arrayO[i].sacarPromedio=function sacarPromedio(notas)
        {
            
            for(let j=0;j<notas.length;j++)
            {
                sum=sum+notas[j];
            
            } 
            let promedio=(sum/notas.length)*10; 
           // console.log(promedio);
            if(promedio>=70)
            {
                this.aprobado=true;
            }
            else{
                this.aprobado=false;
            }
       
        };
    }
}
agregarFuncionPromedio(estudiantes);

for(let estudiante of estudiantes)
{
    estudiante.sacarPromedio(estudiante.notas);
    
}


//console.log(estudiantes);
/* 
Punto 3: Arreglos y Bucles
7. Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.

*/

let arreglo=[7,4,24,8,5,22,88];
let i=0;
let sumaPares=0;
while(i!=-1)
{
   
    if(i<arreglo.length)
    {
        if(arreglo[i]%2==0)
        {
            sumaPares=sumaPares+arreglo[i];
        }
        
        i=i+1;
    }
    else
    {
        i=-1;
    }
   
}
//console.log(sumaPares);

/* 
Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y devuelva el producto de los números impares.

*/

function getProductoImpares(arr)
{
    let productoI=1;
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
            productoI=productoI*arr[i]

        }
    }
    return productoI;
}
let ejemplo = getProductoImpares(arreglo)
//console.log(ejemplo);
/* 
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.

Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; 
si es posterior o igual a 2010, el impuesto es del 5%.

*/

let vehiculo = {marca:'smart',modelo:'fortwo',anio:2013,precio:150000,calculaImpuesto:function(){
    let impuesto=0;
    if(this.anio<2010)
    {
        impuesto=0.1*this.precio;     
    }
    else
    {
        impuesto=0.05*this.precio;  
    }
    return impuesto;
}}

//console.log(vehiculo.calculaImpuesto())