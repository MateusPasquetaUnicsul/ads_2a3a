class Operacoes{
    constructor(){

    }
    Somar(valorA, ValorB){
        console.log("Resultado " + (valorA + ValorB));
    }

    Somar(valorA, ValorB, valorC){
        console.log("Resultado " + (valorA + ValorB + valorC));
    }
}

var objeto = new Operacoes();
objeto.Somar(10,20);