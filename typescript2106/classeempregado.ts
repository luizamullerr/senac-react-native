class Empregado {
    nome: string
    valorHora: number
    totalHorasSemanais: number

    constructor(nome: string, valorHora: number, totalHorasSemanais: number) {
        this.nome = nome //puxar campo para atribuir propriedade
        this.valorHora = valorHora
        this.totalHorasSemanais = totalHorasSemanais
    }

    calculaSalario(): number {
        return parseFloat((this.valorHora * this.totalHorasSemanais).toFixed(2))
    }

    imprimeDados(): void { //void não retorna nada
        console.log(`Nome: ${this.nome}`)
        console.log(`Valor R$: ${this.valorHora}`)
        console.log(`Horas Semanais: ${this.totalHorasSemanais}`)
        console.log(`Salário R$: ${this.calculaSalario()}`)
    }
}

export default Empregado