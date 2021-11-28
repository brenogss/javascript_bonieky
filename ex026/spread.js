/*let info = {
    nome: 'Breno',
    sobrenome: 'Gomes',
    idade: 27
}

let novaInfo = {
    ...info,
    cidade: 'São Paulo',
    estado: 'São Paulo',
    país: 'Brasil'
}

console.log(novaInfo)*/

function adicionarInfo(info){
    let novasInfo = {
        ...info,
        status: 0,
        token: 0,
        data_cadastro: '03/11/2021'
    }
    return novasInfo
}
console.log(adicionarInfo({nome:'Breno', sobrenome:'Gomes'}))