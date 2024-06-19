
//map le e autera o valor se quiser

const numeros = [50, 80, 2, 56, 23, 45, 78, 25, 8];

const dobro = numeros.map(valor => valor * 2)

//console.log(dobro)


const pessoas = [
    { nome: 'aaa', idade: 19 },
    { nome: 'bbbb', idade: 60 },
    { nome: 'ccccc', idade: 20 },
    { nome: 'dddddd', idade: 85 },
    { nome: 'eeeeeee', idade: 35 },
];
const nomes = pessoas.map(valor => valor.nome)

const idade = pessoas.map(valor => ({ idade: valor.idade }))

//adiciona uma chave id com cada obj

const comId = pessoas.map(function (valor,indice) {
   const newObj = {...valor}
   newObj.id=indice
    return newObj
})

console.log(comId)