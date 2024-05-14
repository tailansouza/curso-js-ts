function mostraHora (){
    let data = new Date();
    
    return data.toLocaleTimeString('py-br',{
        hour12: false
    });
}


    const tempo = setInterval(function (){
        console.log(mostraHora());
     }, 1000);

     setTimeout(function(){
        clearInterval(tempo)
        console.log('fim da comtagem')
     },6000)

    