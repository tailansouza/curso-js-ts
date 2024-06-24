//defainePropety


function Produto(nome,preco,estoque){
    this.nome = nome
    this.preco = preco
    

    Object.defineProperty(this , 'estoque', {
     enumerable:true,
     value:estoque,
     writable: false,
     configurable: false
    })
}

const p1 = new Produto('camisetra',20,3);

console.log(p1)

console.log(Object.keys(p1))