function mostrar() {
    let imagem = document.querySelector('#imagem').files[0]
    
    let img = document.createElement('img')
    img.src = URL.createObjectURL(imagem)
    img.width = 350

    document.querySelector('#area').appendChild(img)
}
