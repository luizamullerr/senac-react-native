class Product {
    id: number
    descricao: string
    preco: number
    constructor(id: number, descricao: string, preco: number) {
        this.id = id
        this.descricao = descricao
        this.preco = preco
    }
}

let prod1 = new Product(1, 'Feijão', 7.89)
let prod2 = new Product(2, 'Carne', 2.65)

class ItemVenda {
    id: number
    produto: Product
    qtd: number
    constructor(id: number, produto: Product, qtd: number) {
        this.id = id
        this.produto = produto
        this.qtd = qtd
    }
}

let item1 = new ItemVenda(1, prod1, 10)
let item2 = new ItemVenda(2, prod2, 15)

console.log(item1)
console.log(item2)

class Venda{
    id:number
    itens:ItemVenda[]
    constructor (id:number, itens: ItemVenda){
        this.id = id
        this.itens = [itens]
    }
}
let it1 = new Venda(3,item1)
console.log(it1)