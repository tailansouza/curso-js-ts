//iife immediately invoked function expression

(function(peso){
    const sobreNome = 'souza';
    function falaOi(nome){
        return nome + ' '+sobreNome  +' '+peso;
    }
    function falaNome (){
        console.log(falaOi('tailan'))
    }
    falaNome()
})(96);