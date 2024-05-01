function meuEscopo(){
const form = document.querySelector('.formulario');
const resutado =document.querySelector('.resutado');

const pessoas = [];

function recebeEvento( evento){
    evento.preventDefault();


const nome = form.querySelector('#nome');
const sobreNome = form.querySelector('#sobre-nome');
const peso = form.querySelector('#peso');
const altura = form.querySelector('#altura');

pessoas.push({
    nome : nome.value,
    sobreNome : sobreNome.value,
    peso : peso.value,
    altura : altura.value

});
console.log(pessoas);

resutado.innerHTML += `<p> ${nome.value} ${sobreNome.value}` +` ${peso.value} ${altura.value}</p>`;
}



form.addEventListener('submit',recebeEvento);

}
meuEscopo();