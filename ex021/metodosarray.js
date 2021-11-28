let lista = [
    {id:1, nome:'Breno', sobrenome:'Gomes'},
    {id:2, nome: 'Scott', sobrenome: 'Mccall'},
    {id:3, nome: 'Stiles', sobrenome: 'Stilinsky'}
]
let pessoa = lista.find(function (item){
    return (item.nome == 'Scott')? true : false
})

let res = pessoa
console.log(res) 