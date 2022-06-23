class Person {
    name: string = ''
    constructor (name:string){
        this.name = name
    }
}

class Empregado extends Person{
    matricula: string = ''
    constructor(name:string, matricula:string){
        super(name) //passar o name para ser criado no ancestral (1º constructor)
        this.matricula = matricula
    }
}

let emp: Empregado
emp = new Empregado('jose', '123')
emp.matricula = '123'
console.log(emp)

emp.name = 'Maria'

console.log(emp)

