//metodois estaticos

class ControleRemoto {
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }
    //metodos de intancia
    aumentarV(){
        this.volume += 2
    }
    diminuirV(){
        this.volume -= 2 
    }
    //metodo estatico
    static trocaPilha(){
    console.log('trocar as pilhas')
    }
}
const aparelho = new ControleRemoto('sony')

aparelho.aumentarV()


console.log(aparelho)

ControleRemoto.trocaPilha()