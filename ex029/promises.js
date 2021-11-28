function pegarTemperatura () {
    return  new Promise(function(resolve,reject){
        console.log('Pegando a temperatura...')

        setTimeout(function(){
            resolve('40 na sombra')
        },2000)

    })
}
//Usando a Promise
let temp = pegarTemperatura()
temp
.then(function(resultado){
    console.log(`temperatura: ${resultado} `)
})
.catch(function(error){
    console.log('Eita, deu erro!')
})
   
    

    