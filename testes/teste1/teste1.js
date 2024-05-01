function imc(){

    const form = document.querySelector('.fomularioimc');
    let resutado =document.querySelector('.resutado');

    function calculoIMC(calculo){
        calculo.preventDefault();

        let nome = form.querySelector('#nome').value
        let sobrenome = form.querySelector('#sobreNome').value;
        let altura = form.querySelector('#altura').value
        let peso = form.querySelector('#peso').value;
        let resutadoIMC = (peso / (altura*altura)).toFixed(2);
        

        resutado.innerHTML += (`<p> Seu Imc é de:  ${resutadoIMC}</p>`);
   } 
form.addEventListener('submit',calculoIMC)

}
imc();