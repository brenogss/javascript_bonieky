let html = ''
let c = 1

while (c <= 10) {
    html += `Número: ${c}<br>`
    c++

}

for(let c = 1; c <= 10; c++){
    html += `Número: ${c}<br>`
}
document.querySelector('#demo').innerHTML = html

