function Produto(nome,preco){
    this.nome = nome;
    this.preco= preco;
}

Produto.prototype.desconto = function (desconto){
this.preco = this.preco - (this.preco * (desconto / 100))
}

const p1 = new Produto ('camiseta',100)

const p2 = {
    nome:'caneca',
    preco : 15
}

Object.setPrototypeOf(p2 , Produto.prototype);

p1.desconto(50)
p2.desconto(50)
console.log(p1)
console.log(p2)