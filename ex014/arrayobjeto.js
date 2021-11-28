let carro = {
    marca: 'fiat',
    modelo: 'palio',
    peso: '900kg',
    ligado: false,
    ligar:function() {
        this.ligado = true
        console.log('VRUM VRUM')
    },
    acelerar:function() {
        if(this.ligado == true){
            console.log('Rammm')
        }else {
            console.log(`O ${this.marca} ${this.modelo} não está ligado`)
        }
        
    }
}

console.log(`Modelo: ${carro.modelo}`)


carro.acelerar()

