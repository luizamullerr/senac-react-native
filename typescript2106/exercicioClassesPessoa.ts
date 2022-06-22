class Pessoa {
    id: number
    nome: string
    fone: string
    email: string
    peso: number
    altura: number


    constructor(id: number, nome: string, fone: string, email: string, peso: number, altura: number) {
        this.id = id
        this.nome = nome
        this.fone = fone
        this.email = email
        this.peso = peso
        this.altura = altura
    }

    imprimeDados(): void { //void não retorna nada
        console.log(`ID: ${this.id}`)
        console.log(`Nome: ${this.nome}`)
        console.log(`Telefone: ${this.fone}`)
        console.log(`E-mail: ${this.email}`)
        console.log(`IMC: ${this.calculoIMC().toFixed(2)}`)
        console.log('')
    }

    calculoIMC(): number{
        var imc = this.peso/(this.altura*this.altura)
        return imc
    

    }
    salvar(): void {
        console.log(`Nova pessoa adicionada com sucesso`)
    }

   /* validarDados(): void {
        if (this.id == ) {
            console.log("Informe o ID")
        }
        else if (this.nome == "") {
            console.log("Informe o Nome")
        }
        if (this.fone == "") {
            console.log("Informe o Telefone")
        }
        if (this.email == "") {
            console.log("Informe o E-mail")
        }
        console.log(`Dados validados com sucesso`)
    }
*/

}
export default Pessoa