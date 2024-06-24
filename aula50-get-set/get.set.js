

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    
let estoqueP = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        
        get: () =>{return estoqueP},
        set: (valor)=>{
            if(typeof valor !== 'number'){
                console.log('valor invalido')
                return;
            }
            estoqueP = valor
        },

      

    })
}

const p1 = new Produto('camisetra', 20, 3);
p1.estoque = 10;
console.log(p1.estoque)
