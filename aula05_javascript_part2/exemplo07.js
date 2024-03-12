/*IMC = peso / (altura * altura)
abaixo de 18.5 = desnutriçao
entre 18.5 e 25 = peso normal
entre 25 e 30 = sobrepeso
entre 30 e 35 = obsedidade I
entre 35 e 40 = obsedidade II
acima de 40 = obsedidade III
*/

let retornoImc
retornoImc = calcularIMC(65, 1.70)
console.log(retornoImc)
classificarIMC(retornoImc)

//classificarIMC(imc)

function calcularIMC(argPeso, argAltura){
    imc = argPeso / (argAltura **2)
    //console.log(imc)
    return imc
}

function classificarIMC(argIMC){
    if(argIMC < 18.5){
        console.log('Desnutrição')
    }
    else if(argIMC < 25){
        console.log('Peso normal')
    }
    else if(argIMC < 30){
        console.log('Sobrepeso')
    }
    else if(argIMC < 35){
        console.log('Obesidade I')
    }
    else if(argIMC < 40){
        console.log('Obsedidade II')
    }
    else if(argIMC < 45){
        console.log('Obsedidade III')
    }
}