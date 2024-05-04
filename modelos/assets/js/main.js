const form = document.querySelector('#form');

form.addEventListener('submit',function (e) {

    e.preventDefault();
    const inputPeso= form.querySelector('#peso');
    const inputaltura = form.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura =Number(inputaltura.value);

    if(!peso){
       setResutado('Peso invalido',false);
       return;
    }
    if(!altura){
        setResutado('altura invalida',false);
        return;
    }
    const imc =  getImc(peso,altura);
    const gralImc = getGralImc(imc);
    
    const msg = `Seu IMC e de ${imc} e sua condição e de ${gralImc}`;

    setResutado(msg,true);
  
});
function getGralImc(imc){
    const gral = ['Abaixo do peso','Peso normal','Sobre peso','Obesidade 1','Obesidade 2','Obesidade 3'];

    if (imc >= 39.9){return gral[5]};

    if (imc >= 34.9){return gral[4]};

    if (imc >= 29.9){return gral[3]};

    if (imc >= 24.9){return gral[2]};

    if (imc >= 18.5){return gral[1]};

    if (imc < 18.5){return gral[0]};
}


function getImc (peso,altura){
    const imc = peso / altura**2;
    return imc.toFixed(2);
}
function criaP(){
       const p = document.createElement('p');
    return p;
}


function setResutado(msg,valido){

    const resutado = document.querySelector('.resutado');
    resutado.innerHTML ='';

    const p = criaP();
    
    if(valido){
        p.classList.add('paragrafoResutado')}
    else{
        p.classList.add('paragrafoResutadoFalse')
    };
    p.innerHTML=msg;
    resutado.appendChild(p)
 
   
}