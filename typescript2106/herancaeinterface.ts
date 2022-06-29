interface ICRUD {
    salvar(): boolean //metodo
    update(id: number): boolean
    delete(id: number): void
    consultar(id?: number): string //traz umm em especifico
}

class Produto {
    descricao: string = ''
    preco: number = 0
}

class ProdutoFinal extends Produto implements ICRUD {
    consultar(id?: number): string {
        return `consultando por ${id}`
    }
    salvar(): boolean {
        throw new Error("Method not implemented.");
    }
    update(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): void {
        throw new Error("Method not implemented.");
    }


}

let p1 = new ProdutoFinal()
p1.descricao = 'Feijao'
p1.preco = 10
console.log(p1.consultar())

let p2 = new ProdutoFinal()
console.log(p2.consultar(10))