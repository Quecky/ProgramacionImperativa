let velocidad=1000;
let altura = 2500;

function abrirParacaidas(Velocidad, Altura){
    if(Velocidad<1000 && altura>=2000 && altura<3000)
    {
        console.log("El paracaidas puede abrirse")
    }
    else{
        console.log("El paracaidas todavía no puede abrirse")
    }
}

abrirParacaidas(velocidad,altura);