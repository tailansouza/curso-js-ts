 const pessoa = {
   // nome:'',
    sobrenome:'souza',
    idade: 30,
    endereco:{
        rua: 'deodoro',
        numero:144
    }
 };

const {nome = '123',sobrenome,endereco: {rua,numero},...resto} = pessoa

 console.log(nome ,sobrenome,` tem:  anos \ne mora na rua ${rua} no numero ${numero} `)
 console.log(resto)