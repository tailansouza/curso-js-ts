class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
}


const p1 = new Pessoa('joao','cleber')

console.log(p1.nome,p1.sobrenome)