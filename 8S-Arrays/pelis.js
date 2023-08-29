let peliculas = ["star wars","totoro","rocky","pulp fiction","la vida es bella"]


function dameMayusculas(arrayP)
{

    let arrayMayusculas=[];

    for(let i=0;i<(arrayP.length);i++)
    {
    
        arrayMayusculas[i]=arrayP[i].toUpperCase();

    }
    return arrayMayusculas;
}


let nuevoA=dameMayusculas(peliculas);


function unirArraysMayusculos(array1,array2)
{

    for(let i=0;i<array2.length;i++)
    {
    
        array1.push(array2[i].toUpperCase());

    }
    return array1;
}

let array1y2=unirArraysMayusculos(nuevoA,["toy story","finding Nemo","kung-fu panda","wally","fortnite"])


let eliminado = array1y2.pop()



function comparaScores(scores1,scores2)
{
    for(let i=0;i<scores1.length;i++)
    {
        console.log(array1y2[i])
        console.log("Asia: ",scores1[i]," vs Europa: ",scores2[i])
        if(scores1[i]==scores2[i])
        {
            console.log("----Calificaciones iguales----")
        }
        else
        {
            console.log("----Calificaciones diferentes-----")
        }
    }
}

comparaScores([8,10,6,9,10,6,6,8,4],[8,10,6,8,10,6,7,9,5])