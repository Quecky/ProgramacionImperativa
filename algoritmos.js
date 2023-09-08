let matriz2=[];
let k2=1;
let acumulador2=0;
for(i=0;i<5;i++)
{
    matriz2[i]=[];

    for(j=0;j<5;j++)
    {
         matriz2[i][j]=k2;
         k2++;
         acumulador2+=k2;
    }
   
}
console.log(matriz2)
console.log(acumulador2)

let matriz=[];
let k=1;
for(i=0;i<10;i++)
{
    matriz[i]=[];

    for(j=0;j<10;j++)
    {
         matriz[i][j]=k;
         k++;
    }
   
}
//console.log(matriz)

function sumarDiagonalVerde(mat=matriz)
{
    let acumulador=0;
    for(i=0;i<10;i++)
    {
        acumulador+=mat[i][9-i];
    }
    return acumulador;

}
//console.log(sumarDiagonalVerde())

function sumarDiagonalRoja(mat=matriz)
{
    let acumulador=0;
    for(i=0;i<10;i++)
    {
        acumulador+=mat[i][i];
    }
    return acumulador;
    
}
//console.log(sumarDiagonalRoja())