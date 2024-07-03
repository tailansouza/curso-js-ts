function ValidaCpf(cpfEmviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,

        get: function () {

            return cpfEmviado.replace(/\D+/g, '')
        }
    })
}
//checa tamanho e se a augo alen de numeros . kk *
ValidaCpf.prototype.valida = function () {

    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false
    if (this.isSequencia()) return false
    //retira os 2 utimos digitos
    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigitos(cpfParcial)
    const digito2 = this.criaDigitos(cpfParcial + digito1)

    const novoCpf = cpfParcial + digito1 +digito2

    return novoCpf === this.cpfLimpo
}
ValidaCpf.prototype.criaDigitos = function (cpfParcial) {
    const cpfArrey = Array.from(cpfParcial);

let regressivo = cpfArrey.length +1

const total = cpfArrey.reduce((ac , val)=>{

ac += (regressivo * Number(val));

regressivo--;
return ac
},0)

 const digito = 11 - (total % 11)
 return digito > 9 ? '0': String(digito)
}

ValidaCpf.prototype.isSequencia = function (){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo
}

const cpf = new ValidaCpf('705.484.450-52');

if(cpf.valida()){
    console.log('cpf valido')
}else{
    console.log('cpf invalido')
}

console.log(cpf.valida())

