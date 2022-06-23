class Animais {
    animal: string = ''
    constructor(animal: string) {
        this.animal = animal
    }
}

class Grupos extends Animais {
    especie: string = ''
    raça: string = ''
    constructor(animal: string, especie: string, raça: string) {
        super(animal)
        this.especie = especie
        this.raça = raça
    }
}


let dog: Grupos
dog = new Grupos('Cachorro', 'Mamifero', 'Labrador')
dog.especie = 'Mamifero'
dog.raça = 'Labrador'
console.log(dog)

let cat: Grupos
cat = new Grupos('Gato', 'Mamifero', 'Persa')
cat.especie = 'Mamifero'
cat.raça = 'Persa'
console.log(cat)

let cavalo: Grupos
cavalo = new Grupos('Cavalo', 'Mamifero', 'Frisio')
cavalo.especie = 'Mamifero'
cavalo.raça = 'Frisio'
console.log(cavalo)

/*
class Animal{
    raça:string=''
    especie:string=''
    constructor(raça: string,especie:string) {
        this.raça = raça
        this.especie = especie
}}

let animal: Animal
animal = new Animal()
animal.raça = 'Pincher'
animal.especie = 'Cachorro'


class Mamifero extends Animal{
    numeroMamas:number=0
    constructor(numeroMamas:number) {
        super(Animal)
        this.numeroMamas = numeroMamas
}}
let mamifero: Mamifero
mamifero = new Mamifero()
mamifero.raça = 'pitbull'
mamifero.especie = 'cachorro'


class Cachorro extends Mamifero{
    cor:string=''
}
let cachorro = new Cachorro()
cachorro.cor = 'caramelo'
cachorro.raça = 'labrador'
cachorro.especie = 'cachorro'
cachorro.numeroMamas = 6

*/
