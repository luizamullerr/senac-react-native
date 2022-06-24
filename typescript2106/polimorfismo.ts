class Veiculo {
    placa: string = ''
    marca: string = ''
    modelo: string = ''

    constructor(placa: string, marca: string, modelo: string) {
        this.placa = placa
        this.marca = marca
        this.modelo = modelo
    }
    display(): void {
        console.log(`Placa: ${this.placa}`)
        console.log(`Marca: ${this.marca}`)
        console.log(`Modelo: ${this.modelo}`)
    }
}

let carro = new Veiculo('ABC123', 'HONDA', 'CIVIC')
carro.display()

class Moto extends Veiculo{
    cilindradas: number = 160
    display():void{
        super.display()
        console.log(`Cilindradas: ${this.cilindradas}`)
    }
}

let moto = new Moto('SDASD566','HONDA','BROZ')
moto.display()