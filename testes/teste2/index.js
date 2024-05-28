 const content = document.querySelector('.cotainer');

function cria(texto){
    const paragrafo = document.createElement('p');
    paragrafo.innerText = texto;
    return paragrafo;
}
function novoParagrafo(){
const novoParagrafo = cria('novo texto')
content.appendChild(novoParagrafo);
}

novoParagrafo()
