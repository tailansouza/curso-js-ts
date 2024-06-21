//filter nao modifica valor so filtra
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 10, 15, 30];

const filtrados = numeros.filter(valor=> valor > 10);

console.log(filtrados)

const pessoas = [
    {nome:'tailan',  idade: 19},
    {nome:'bbbb',  idade: 60},
    {nome:'ccccc',  idade: 20},
    {nome:'dddd',  idade: 85},
    {nome:'eeeeee',  idade: 35},
];

const p2 = pessoas.filter(obj => obj.idade > 50 );


const p3 = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('n') );

console.log(p3)


