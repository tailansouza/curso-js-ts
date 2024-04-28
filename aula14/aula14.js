let num1 = 10.25253515
let num2 = 12

let resutado =Number(num1+num2);
//esibir apos a virgula
console.log(resutado.toFixed(2))
//meu numero e inteiro
console.log(Number.isInteger(resutado))


let num3 = 0.7
let num4 = 0.1

num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 = parseFloat(num3.toFixed(2))

console.log(Number(num3));
console.log(Number.isInteger(num3));