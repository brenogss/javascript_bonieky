/*let texto = ''

for(i = 0; i <= 50; i++){
    texto += i + '<br>'
}
document.querySelector('#demo').innerHTML = texto */
let carros = ['onix', 'sandero', 'argo', 'hb20', 'ká', 'prisma', 'cruze']
let html = '<ul>'

for(let i in carros){
    html += '<li>'+ carros[i] +'</li>' 
}

html += '</ul>'

document.querySelector('#demo').innerHTML = html