function criaPesoa(nome, sobreNome, altu, pes) {
    return {
        nome,
        sobreNome,
        fala: function (assunto) {
            return `${this.nome} que tem ${this.altura} de autura e ${this.peso} kl esta falando sobre ${assunto} `;
        },
        altura: altu,
        peso: pes,
    };
}

const pesoa1 = criaPesoa('tailan', 'sousa', 1.90, 96);
console.log(pesoa1.fala('codar'))