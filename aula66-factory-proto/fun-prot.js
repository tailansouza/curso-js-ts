function criaPessoa(nome, sobrenome) {

    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} esta falando`)
        },
        beber() {
            console.log(`${this.nome} esta bebendo`)
        },
        comer() {
            console.log(`${this.nome} esta comendo`)
        }
    }
    return Object.create(pessoaPrototype , {
        nome : {value : nome},
        sobrenome: {value : sobrenome}
    })
};

const p1 = criaPessoa('tailan', 'souza')
console.log(p1)