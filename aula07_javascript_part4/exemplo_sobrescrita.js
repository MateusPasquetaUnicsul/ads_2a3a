class Funcionario{
    constructor(pNome, pSalario){
        this.nome = pNome;
        this.salario = pSalario;
    }

    get Nome(){return this.nome;}
    set Nome(pNome){this.nome = pNome;}
    get Salario(){return this.salario;}
    set Salario(pSalario){this.salario = pSalario;}
    
    calcularSalario(){

    }
}

class Vendedor extends Funcionario{
    constructor(pNome, pSalario, pComissao){
        super(pNome, pSalario);
        this.Bonus = pBonus;

    }

    get Bonus(){return this.bonus;}
    set Bonus(pComissao){this.bonus = pBonus;}

    calcularSalario(){
        return this.salario + this.bonus;
    }
}

var vendedor = new Vendedor("Luiz", 1100, 150);
console.log(vendedor.calcularSalario());

var opcaixa = new OperadorCaixa("Fabio", 1400, 100);
console.log(opcaixa.calcularSalario());