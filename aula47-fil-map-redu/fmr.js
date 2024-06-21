function soma() {

    const numeros = [50, 80, 2, 56, 23, 45, 78, 25, 8];

    const filtrados = numeros.filter(valor => valor % 2 === 0);

    const dobro = filtrados.map(valor => valor * 2);

    const soma = dobro.reduce((i, valor) => i + valor);

    console.log(soma);
}
soma()

