function subirTela () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function decidirBotaoScroll () {
    if (window.scrollY == 0){
        document.querySelector('.scrollbutton').style.display = 'none'
    }else {
        document.querySelector('.scrollbutton').style.display = 'block'
    }
}

//setInterval(decidirBotaoScroll, 1000) seleciona o tempo que ira aparecer
window.addEventListener('scroll', decidirBotaoScroll)