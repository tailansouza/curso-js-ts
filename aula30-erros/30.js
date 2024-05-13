function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw ('x e y presiza ser numeros')
    }
    return x + y;
}
try { console.log(soma(10, 5)) }
catch (err) {
    console.log(`x ou y nao e um numero`)
}