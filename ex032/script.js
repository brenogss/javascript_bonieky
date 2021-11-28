async function enviar () {
    let arquivo = document.querySelector('#arquivo').files[0]

    let body = new FormData()
    body.append('title', 'Título qualquer')
    body.append('arquivo', arquivo)

    let req = await fetch('https://www.meusite.com/upload', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}