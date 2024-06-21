const numeros = [50, 80, 2, 56, 23, 45, 78, 25, 8];

const total = numeros.reduce(function (acumulador,valor,indice,array){
    acumulador.push(valor*2)
return acumulador
},[])
console.log(total)

const pessoas = [
    { nome: 'aaa', idade: 19 },
    { nome: 'bbbb', idade: 60 },
    { nome: 'ccccc', idade: 20 },
    { nome: 'dddddd', idade: 85 },
    { nome: 'eeeeeee', idade: 35 },
];

const maisVelha = pessoas.reduce(function(acumulador,valor){

if (acumulador.idade > valor.idade)return acumulador ;
return valor

})
//console.log(maisVelha.nome +' '+ maisVelha.idade)