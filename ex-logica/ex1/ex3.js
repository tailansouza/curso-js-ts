function divisivel(num) {
  if(typeof num !== 'number'){
    return `${num} nao e um numero`
  }



    let resutadoDivisivel = ''
    if (num % 3 === 0 && num % 5 === 0) {
        resutadoDivisivel = 'FizzBuzz'
    }
    else if (num % 3 === 0) {
        resutadoDivisivel = 'Fizz'
    }
    else if (num % 5 === 0) {
        resutadoDivisivel = 'Buzz'

    } else {
        resutadoDivisivel = num;
    }
    return resutadoDivisivel;
}
console.log(divisivel('palavra'))
for (let i = 0;i<=50;i++){
    console.log(i,divisivel(i))
}