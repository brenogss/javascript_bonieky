let pessoa = {
    nome: 'Breno',
    sobrenome: 'Gomes',
    idade: 27,
    social:{
        facebook: 'brenogss',
        instagram: {
            url:'@brenno_muller',
            seguidores: 1000
        }
    },
    
}

function pegarNomeCompleto({nome, sobrenome, social:{instagram:{url:instagram}}}) {
    
    return `${nome} ${sobrenome} (Siga no instagram: ${instagram})`
}
console.log(pegarNomeCompleto(pessoa))
