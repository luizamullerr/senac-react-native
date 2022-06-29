interface IAnimal {
    raca: string
    especie: string
    barulho(x: string): void
}
interface IMamifero {
    quantidadeMamas: number
    getQtdLeite(): number
}

class Bicho implements IAnimal, IMamifero {
    raca: string = 'Pitã'
    especie: string = 'Suína'
    quantidadeMamas: number = 10

    getQtdLeite(): number {
        return 10
    }

    barulho(x: string): void {
        console.log(`Barulho de ${x}`)
    }
    display(){
        console.log(`Raça: ${this.raca}`)
        console.log(`Espécie: ${this.especie}`)
        console.log(`Quantidade de Mamas: ${this.quantidadeMamas}`)
    }

}

let bicho: Bicho
bicho = new Bicho()
bicho.barulho('Pocotó pocotó')
bicho.display()