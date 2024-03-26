class Conta{
    constructor(){
        this.Saldo = 0;
    }

    get Saldo(){return this.Saldo;}
    set Saldo(pSaldo){this.saldo = pSaldo;}
}

class Corrente extends Conta {
    constructor(pLimite){
        super();
        this.Limite = pLimite;
    }
    get Limite(){return this.Limite;}
    set Limite(pLimite){this.limite = pLimite;}
}

var obj_cc = new Corrente(1000);
obj_cc.saldo = 500;
console.log(obj_cc);