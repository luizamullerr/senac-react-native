interface ICarrinho {
    id: number
    produtos: [{
        descricao: string
        qtd: number
        preco: number
}]}

var carrinho: ICarrinho = {id: 1, produtos:[{descricao:'Pao',qtd:2,preco:5.00}]}
console.log(carrinho)
