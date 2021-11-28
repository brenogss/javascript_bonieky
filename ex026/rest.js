/*function adicionar (...nomes){
    console.log(nomes)
}

adicionar('Breno', 'Johnson', 'Bills',)*/

function adicionar(nomes,...novosNomes){
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ]
    return novoConjunto
}

let nomes = ['Breno', 'Johnson']
let novosNomes = adicionar(nomes, 'Scott', 'Colt', 'Abby', 'Header')
console.log(novosNomes)
