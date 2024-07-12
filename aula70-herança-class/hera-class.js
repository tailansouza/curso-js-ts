class  DispositivoEle {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) return;
         this.ligado = true;
         console.log(`seu ${this.nome}  ${this.cor} esta ligado`)   
       
        
    }
    desligar(){
        if(!this.ligado) return;
         this.ligado = false;
         console.log(`seu ${this.nome}  ${this.cor} esta desligado`)   
       
        
    }

};

class Smart extends DispositivoEle{
    constructor (nome , cor){
        super(nome)
        this.cor = cor
    }
}

const d2 = new Smart('iphone','black')

d2.ligar()
d2.desligar()


