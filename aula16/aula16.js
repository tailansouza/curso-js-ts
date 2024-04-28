const numeroEscolido = prompt('Digite um numero:')
const numero = parseFloat(numeroEscolido);

document.body.innerHTML +=(`<strong>Seu numero é : ${numero} <br>`);
document.body.innerHTML += (`A raiz quadrada do numero escolido e ${(numero ** 0.5)}<br>`);
document.body.innerHTML +=(`${numero} e um numero enteiro : ${Number.isInteger(numero)} <br>`);
document.body.innerHTML += (`o numero e NeN : ${isNaN(numero)} <br>`);
document.body.innerHTML += (`O numero aredondado para baixo e : ${Math.floor(numero)} <br>`);
document.body.innerHTML += (`O numero aredondado para cima e : ${Math.ceil(numero)} <br>`);
document.body.innerHTML += (`com apenas duas casas decimais : ${numero.toFixed(2)} <br>`);