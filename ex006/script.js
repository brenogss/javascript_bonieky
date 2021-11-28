function trocarImagem(filename,animalname) {
    document.querySelector('.imagem').setAttribute('src', `imagens/${filename}`)
    document.querySelector('.imagem').setAttribute('data-animal', animalname)
}


function pegarAnimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal')
   // alert(`O animal é um: ${animal}`)
    let res = document.querySelector('#res')
    res.innerHTML = `O animal é um ${animal}`
}