async function inserirPost() {
    document.querySelector('#posts').innerHTML = 'Carregando...'

    let req = await fetch('https://jsonplaceholder.typicode.com/posts')
       
    let json = await req.json()

    console.log(json)
}