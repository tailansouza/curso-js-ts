const data =new Date();
const diaSemana = data.getDay();
const diaSemanaText = getDiaSemanaText(diaSemana);


function getDiaSemanaText (diaSemana){
let diaSemanaText;


switch (diaSemana){
    case 0:
        diaSemanaText = 'domingo';
       return diaSemanaText;
    case 1:
        diaSemanaText = 'segunda';
        return diaSemanaText;
    case 2:
        diaSemanaText = 'tersa';
        return diaSemanaText;
    case 3:
        diaSemanaText = 'quarta';
        return diaSemanaText; 
     case 4:
        diaSemanaText = 'quinta';
        return diaSemanaText;
    case 5:
        diaSemanaText = 'sexta';
        return diaSemanaText;
    case 6:
    diaSemanaText = 'sabado';
    return diaSemanaText;


}

}
console.log(diaSemana,diaSemanaText,data);