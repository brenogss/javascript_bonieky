//setTimeout(function(){}, 2000)

let timer
function rodar () {
   timer = setTimeout(function(){
        document.querySelector('.demo').innerHTML= 'Rodou!'
    }, 2000)
}

function parar() {
    clearTimeout(timer)
}


/*let timer 
function rodar() {
    timer = setTimeout(rodou,2000)
}

function parar() {
    clearTimeout(timer)
}


function rodou() {
    document.querySelector('.demo').innerHTML = 'Rodou!'
}
*/

