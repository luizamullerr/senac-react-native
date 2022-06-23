class Produto {
    descricao: string
    valorUnit: number
    qtdEstoque: number


    constructor(descricao: string, valorUnit: number, qtdEstoque: number) {
        this.descricao = descricao
        this.valorUnit = valorUnit
        this.qtdEstoque = qtdEstoque
    }

    imprimir(): void { //void não retorna nada
        console.log(`Descrição: ${this.descricao}`)
        console.log(`Valor Unitário: ${this.valorUnit}`)
        console.log(`Quantidade em Estoque: ${this.qtdEstoque}`) 
        console.log('')
        console.log(`Get Estoque ${this.getEstoque()}`)
        console.log(`Preço com desconto: ${this.precoComDesconto(15)}`)
        console.log(`Preço com acréscimo: ${this.precoComAcrescimo(5)}`)
    }

    getEstoque(): number {
        return this.qtdEstoque
    }

    precoComDesconto(taxa: number): number {
        var taxa = taxa/100
        var precoDesconto = this.valorUnit - (taxa*this.valorUnit)
        return precoDesconto
    }
    precoComAcrescimo(taxa: number): number{
        var taxa = taxa/100
        var precoAcrescimo = this.valorUnit + (taxa*this.valorUnit)
        return precoAcrescimo
    }
}
export default Produto