function Pessoa(nome, sobreNome) {

    const Id = 123456;

    const metodoInterno = e =>{

    };

    this.nome = nome;
    this.sobreNome = sobreNome;

    this.metodo = function(){
        console.log(this.nome +": me chamou");
    };
};

const p1 = new Pessoa('luiz', 'otavio');
console.log(p1.nome)
p1.metodo();