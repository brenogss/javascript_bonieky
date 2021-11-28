let cartao = '5528963912345678'
let lastDigits = cartao.slice(0,3)
let cartaoMascarado = lastDigits.padEnd(16, '*')
console.log(`Esse é o seu cartão? ${cartaoMascarado}`)