class Conexao {
    static path: string = ''
    database: string = ''

    static getConexao(): string {
        return this.path
    }
}

let conexao: Conexao
conexao = new Conexao()
conexao.database = 'Loja'
//console.log(conexao.getConexao())  =  Não é possível

let con2 = new Conexao()
con2.database = 'Posto'

Conexao.path = 'C:/users/db.json'
console.log(Conexao.getConexao())