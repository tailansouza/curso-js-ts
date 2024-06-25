/*
Object.values
Object.entries
Object.assign
Object.getOwnPropertyDescriptor(o ,'prop')
...(spread)
*/
const produto = {nome:'caneca' , preco:20};

//const outraCoisa = {...produto,cor:'black'}//fas uma copia que pode ser auterada,nao autera atiga

//Object.defineProperty(produto,'nome',{ configurable: false})
 for (let valor of Object.entries(produto)){
    console.log(valor[0],valor[1])
 }  



