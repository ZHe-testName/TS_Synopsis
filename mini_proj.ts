class Dog {
    constructor(readonly name: string){
        this.name = name;
    }

    sayHello(): string {
        return ('Dog ' + this.name + ' say hello!');
    }
};

class Fish {
    constructor(readonly name: string){
        this.name = name;
    }

    dive(howDeep: number): string {
        return ('Im dive in ' + howDeep + 'met' )
    }
};

type Pet = Dog | Fish;

function talkToPet (pet: Pet): string | null {
    if (pet instanceof Dog) return pet.sayHello();

    if(pet instanceof Fish) return "Fish don't tailk";

    return null;
}

const dog = new Dog ('Smokey');
const fish = new Fish ('Eyes');
const monster = {name: 'Glummy'};

console.log(talkToPet(dog));
console.log(talkToPet(fish));
////не скомпилится