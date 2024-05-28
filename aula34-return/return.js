
function soma2(a,b){
  return  console.log(a+b)
}
soma2(10,5)
///////////////////////////////////////////////////////////////////
function criaPessoa(nome ,sobreNome){
    return {nome , sobreNome}
}
const p1 = criaPessoa('pedro','sampaio')

console.log(p1)
////////////////////////////////////////////////////////////////////
function falaComeco(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto
    }
    return falaResto
}
const olaMundo = falaComeco('ola')

console.log(olaMundo('mundo'));

function criaMutiplicador(mutiplicador){
    return function (n) {
        return n*mutiplicador
    }
}
const duplica = criaMutiplicador(2);
const trplica = criaMutiplicador(3);
const quaduplica= criaMutiplicador(4);

console.log(duplica(2))
console.log(trplica(3))
console.log(quaduplica(4))
