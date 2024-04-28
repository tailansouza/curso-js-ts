const  nome = prompt('digite seu nome completo:');

const quantidadeLetras = nome.length;
const segundaLetra = nome.charAt(1);
const primeiroIndice = nome.indexOf('a');
const ultimoIndice = nome.lastIndexOf('a');
const utimasTresLetras = nome.slice(-3);
const quantidadePalavras = nome.split(' ');
const nomeMaiusculo = nome.toUpperCase();
const nomeMinusculo = nome.toLowerCase();


document.body.innerHTML += `seu nome é : ${nome} <br/>` ;
document.body.innerHTML += `seu nome tem ${quantidadeLetras} letras <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é : ${segundaLetra} <br/>`;
document.body.innerHTML += `O primeiro indice da letra A em seu nome é: ${primeiroIndice} <br/>`;
document.body.innerHTML += `O ultimo indice da letra A em seu nome é: ${ultimoIndice} <br/>`;
document.body.innerHTML += `As utimas tres letras do seu nome sao: ${utimasTresLetras} <br/>`;
document.body.innerHTML += `seu nome e composto pelas palavras :  ${quantidadePalavras}<br/>`;
document.body.innerHTML += `seu nome com letras maiusculas: ${nomeMaiusculo} <br/>`;
document.body.innerHTML += `seu nome com letras minusculas: ${nomeMinusculo} <br/>`;