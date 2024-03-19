class livro {
    constructor(pNome){
        this.Nome = pNome;
    }

    get Nome () {return this.Nome;}
    set Nome(pNome) {this.nome = pNome;}

}

var obj_livro1 = new livro("use a cabeça Java");
console.log("Nome do Livro: " + obj_livro1.nome)