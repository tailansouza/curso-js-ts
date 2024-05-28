//declarasao de funçao clasic

function falaOi() {
    console.log('oi');
};
falaOi()

//first-class objects

const souDado = function () {
    console.log('sou um dado..')
}
souDado();

function exFunction(funcao) {
    {
        funcao()
    }
}
exFunction(souDado)

//arrow function
const fArrow = () => {
    console.log('arrow function')
}
fArrow();

//dentro de um objeto
const obj = {
    falar: function () {
        console.log('estou falando')
    }
}
obj.falar();