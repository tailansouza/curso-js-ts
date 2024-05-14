function cronometro (){
    function criarSegundos (segundos){
    const date =new Date (segundos *1000);
     return date.toLocaleTimeString('PT-BR',{hour12:false,timeZone:'UTC'})
};

const mostrador = document.querySelector('.mostrador');
let resutados = document.querySelector('.resutados')
let segundos = 0;
let tempo;

function iniciarTimer(){
    tempo = setInterval(function(){
    segundos++;
    mostrador.innerHTML = criarSegundos(segundos);
   }, 1000)
}


document.addEventListener('click', function (e){
    let clicado = e.target
    
    if (clicado.classList.contains('iniciar')){
      clearInterval(tempo)
       iniciarTimer()  
    }
    if (clicado.classList.contains('parar')){
        clearInterval(tempo)
        resutados.innerHTML = `seu tempo foi de ${segundos}`
      }
      if (clicado.classList.contains('zerar')){
        clearInterval(tempo);
        mostrador.innerHTML = '00:00:00'
        resutados.innerHTML = ``
        segundos = 0;
      }
})
}
cronometro()













