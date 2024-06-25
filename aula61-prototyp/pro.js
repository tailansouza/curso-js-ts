function Pessoa(nome,sobreNome){

    this.nome = nome;
    this.sobreNome = sobreNome;

  // this.nomeCompleto=()=>{ 'original '+this.nome + ' '+this.sobreNome  }
}

Pessoa.prototype.nomeCompleto = function (){
    return this.nome + ' '+this.sobreNome
}

const p1 =new Pessoa('luiz','gustavo');
const p2 =new Pessoa('tailan','souza');




console.dir(p1)
console.dir(p2)
