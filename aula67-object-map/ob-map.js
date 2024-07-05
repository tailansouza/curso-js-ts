const pessoas =[

    
    {id : 3 , nome :'faria'},
    {id : 2 , nome :'souza'},
    {id : 1 , nome :'tailan'},
];

const novasPsoas =new Map();

for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPsoas.set(id,{...pessoa})
    
}

console.log(novasPsoas.get(2))