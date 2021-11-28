let data = new Date()
let dia = data.getDay()
let diaNome = ''

switch(dia){
    case 6:
    case 0:
        diaNome = 'Final de semana'
        break
    default:
        diaNome = 'Dia de Semana'
        break
    
}

document.querySelector('#dia').innerHTML = `Hoje é: <strong>${diaNome}</strong>`
