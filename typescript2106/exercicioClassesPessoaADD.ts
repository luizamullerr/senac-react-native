import Pessoa from "./exercicioClassesPessoa"

let jose = new Pessoa(1,'Jose da Silva', '12345565', 'josesilva@gmail.com',45, 1.56)
/*console.log(jose)
jose.fone = '7777'
console.log(jose.fone) */
//jose.imprimeDados()

let maria = new Pessoa(2,'maria','35454','maria@gmail.com', 48, 1.60)
//console.log(maria.nome)
//maria.imprimeDados()

//console.log (pessoas)
let pessoas: Pessoa[] = []
pessoas.push(jose)
pessoas.push(maria)
pessoas.push(new Pessoa(3,'Antonia','854458','antonia@gmail.com',80,1.70))
pessoas.push(new Pessoa(4,'Cintia','9898958','cintia@gmail.com',60,1.65))

//console.log(pessoas)
pessoas.forEach((p) => {
    pessoas.forEach((p) => p.imprimeDados() );
   })
