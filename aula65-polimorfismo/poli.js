function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente`);
        this.verSaldo();
        return
    }
    this.saldo -= valor;
    this.verSaldo()
}



Conta.prototype.depositar = function (valor) {
    this.saldo += valor
    this.verSaldo();
}

Conta.prototype.verSaldo = function () {
    console.log(`Ag:${this.agencia} Cont:${this.conta} \nSaudo atual: R$${this.saldo.toFixed(2)}`)
}

function CC(agencia, conta, saldo ,limite){
    Conta.call(this ,agencia , conta, saldo)
    this.limite = limite;
    
}
CC.prototype = Object.create(Conta.prototype)
CC.prototype.constructor = CC

CC.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente`);
        this.verSaldo();
        return
    }
    this.saldo -= valor;
    this.verSaldo()
}
function CP(agencia, conta, saldo){
    Conta.call(this ,agencia , conta, saldo)
    
}
CP.prototype = Object.create(Conta.prototype)
CP.prototype.constructor = CP


const cc1 = new CC(1,2,0,100)
cc1.depositar(20)
cc1.sacar(80)
console.log('........................')
const cp1 = new CP(1,2,0)
cp1.depositar(0)
cp1.sacar(1)