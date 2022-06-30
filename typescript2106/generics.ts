function getArray<T>(itens: T[]):T[]{
    return new Array<T>().concat(itens)
}
let num = getArray([100,200,300])
let str = getArray(["Oi","Tudo bem?"])

num.push(100)
str.push("Olá typescript")

//num.push("Oi") //ERRO
//str.push(500) //ERRO


console.log(num)
console.log(str)

//Genercis Constraints

function dados<T>(p1:T,p2:T): T[]{
    let vetor:T[] = []
    vetor.push(p1)
    vetor.push(p2)
    return vetor
}
let numeros = dados<number>(10,20)
numeros.push(50)
console.log(numeros)

let frutas = dados<string>('Laranja', 'Banana')
frutas.push('Morango')
console.log(frutas)

function base<T, U>(n1: T, n2:U){
    console.log(`${n1}, ${n2}`)
}
let boletim = base<string, number>('Jose', 7)
let func1 = base<string, boolean>('João', true)
let func2 = base<string, boolean>('Pedro', false)
