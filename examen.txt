//Ejercicio 1
function esNumero(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
}
//console.log(esNumero('i'))
function esCadena(valor) {
    return valor !== null && (valor.constructor === String || valor instanceof String);
}
//console.log(esCadena(true))
function esBooleano(valor) {
    return valor === true || valor === false;
}

function verificarTiposYOperar(valor1, valor2) {
    let variableRetorno="Los tipos de datos no son compatibles para realizar una operación."
    if (esNumero(valor1) && esNumero(valor2)) {
        variableRetorno= valor1 * valor2;
    } else if (esCadena(valor1) && esCadena(valor2)) {
        variableRetorno= valor1 + valor2;
    } else if (esBooleano(valor1) && esBooleano(valor2)) {
        variableRetorno= false;
    }
    return variableRetorno;
}

//console.log(verificarTiposYOperar(true,false))


//Ejercicio 2

let ObjetoPersona ={
    nombre:'Dalia',
    apellido:'Barranco',
    edad:25,
    esArgentino:false
}

function verificarDatos(objeto)
{
    let valorRetorno;
    if(objeto.edad>=18 && objeto.esArgentino===true)
    {
        valorRetorno=objeto.nombre+' '+objeto.apellido+' vive en Argentina y es mayor de edad.';
    }
    else if(objeto.edad>=18)
    {
        valorRetorno=objeto.nombre+' '+objeto.apellido+' NO vive en Argentina y es mayor de edad.';
    }
    else if(objeto.esArgentino===true)
    {
        valorRetorno=objeto.nombre+' '+objeto.apellido+' vive en Argentina y NO es mayor de edad.';
    }
    else
    {
        valorRetorno=objeto.nombre+' '+objeto.apellido+' NO vive en Argentina y NO es mayor de edad';
    }
    return valorRetorno;
}


function verificacionDeTiposDeDatos(valor1,valor2)
{
    let valorR;
    //console.log(esBooleano(valor1)&&esBooleano(valor2))
    if((esBooleano(valor1)&&esBooleano(valor2))||(esCadena(valor1)&&esCadena(valor2)) )
    {
        valorR='Son del mismo tipo';
    }
    else
    {
        valorR='No son del mismo tipo';
    }
    return valorR;
}

console.log(verificacionDeTiposDeDatos(true,'true'));//No son del mismo tipo
console.log(verificacionDeTiposDeDatos(false,true));//Son del mismo tipo
console.log(verificacionDeTiposDeDatos('true','false'));//Son del mismo tipo
console.log(verificacionDeTiposDeDatos('false',false));//No son del mismo tipo

//Ejercicio 3

let destinos =[];

let brasil = {
    cantidadDeVisitas:3,
    clima:'soleado',
    habitantes:'212 millones'
}

let rusia = {
    cantidadDeVisitas:4,
    clima:'frio',
    habitantes:'144 millones'
}

let estadosUnidos = {
    cantidadDeVisitas:1,
    clima:'nublado',
    habitantes:'329 millones'
}

destinos.push(brasil,rusia,estadosUnidos);
console.log('Array destinos antes de siguienteViaje ',destinos);

function siguienteViaje(arrpaises)
{
    for(let pais of arrpaises)
    {
        pais.cantidadDeVisitas=pais.cantidadDeVisitas+1;
    }
    return arrpaises;
}

console.log('Array destinos despues de siguienteViaje ',siguienteViaje(destinos));