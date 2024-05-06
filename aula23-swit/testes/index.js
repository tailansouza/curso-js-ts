const h1 = document.querySelector('.texto-h1');
const data = new Date();

function getDiaSemanaText (diaSemana){
    let diasSemana= ['domingo','segunda','tersa','quarta','quinta','sexta','sabado',];
    return diasSemana[diaSemana];

 }

 function getNomeMes(numeroMes){
    let mes;
    
    
    switch (numeroMes){
        case 0:
           mes = 'janeiro';
           return mes;
        case 1:
            mes = 'fevereiro';
            return mes;
        case 2:
            mes = 'março';
            return mes;
        case 3:
            mes = 'abril';
            return mes; 
         case 4:
            mes = 'maio';
            return mes;
        case 5:
            mes = 'junho';
            return mes;
        case 6:
            mes = 'julho';
        return mes;
        case 7:
            mes = 'agosto';
            return mes;
        case 8:
            mes = 'setembro';
            return mes; 
         case 9:
            mes = 'outubro';
            return mes;
        case 10:
            mes = 'novenbro';
            return mes;
        case 11:
            mes = 'desembro';
        return mes;
    
    
    }
 }
 function criarData(data){
const diaSemana = data.getDay();
const numeroMes = data.getMonth();

const nomeDia = getDiaSemanaText(diaSemana);
const nomeMes = getNomeMes(numeroMes);

return( `${nomeDia}, ${data.getDate()} de  ${nomeMes} ` + `de  ${data.getFullYear()} as  ${data.getHours()} : ${data.getMinutes()}`);
 }



h1.innerHTML = criarData(data);

//const h1 = document.querySelector('.texto-h1');
//const data = new Date();

//const options = {
//    dateStyle: 'full',
//    timeStyle: 'short'
//};

//h1.innerHTML = data.toLocaleString('pt-BR',options);