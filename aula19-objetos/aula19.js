const pessoa1 = {
    nome: 'luiz',
    sobreNome:'souza',
    idade: 10,

    fala() {
console.log(`${this.nome} de ${this.sobreNome} esta online`)
    }
};

pessoa1.fala();


/*function criarPerfil(nome , sobreNome , idade){
    return {
        nome : nome,
        sobreNome : sobreNome,
        idade : idade
    };
};

const pessoa1 = criarPerfil('a','souza',30);
const pessoa2 = criarPerfil('b','souza',31);


console.log(pessoa1,pessoa2,pessoa3,pessoa4)*/