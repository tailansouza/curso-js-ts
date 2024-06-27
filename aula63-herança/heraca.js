
function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
}
//aumenta
Produto.prototype.aumento = function(quantia){
   this.preco += quantia;
}
//desconta
Produto.prototype.diminui = function(quantia){
    this.preco -= quantia;
 }

//reutilisando a funçao Produto
 function Camiseta(nome,preco,cor){
Produto.call(this , nome, preco);
this.cor = cor
 }
//linca prototip produto em camiseta
 Camiseta.prototype = Object.create(Produto.prototype)
 Caneca.prototype = Object.create(Produto.prototype)

 //define como nome de funçao construtora camiseta
 Camiseta.prototype.constructor = Camiseta
 Caneca.prototype.constructor = Caneca

//sobre escreve a funçao aumento de + para %
Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}
Caneca.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
} 



function Caneca(nome,preco,material,estoque){
    Produto.call(this,nome,preco)
    this.material = material
    
    Object.defineProperty(this , 'estoque',{
enumerable:true,
configurable:false,
get:function(){
    return estoque
},
set: function(valor){
    if (typeof valor !== 'number'){return}
    estoque = valor
}
    })
}

 //produtos
 const camiseta = new Camiseta('regata',30,'black');
 
 const caneca = new Caneca('chicara',13,'porcelana',10);
caneca.estoque = 15
 

 console.log(caneca)
 console.log(caneca.estoque)


 console.log(camiseta)
 


