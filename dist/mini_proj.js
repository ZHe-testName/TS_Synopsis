"use strict";
var Dog = (function () {
    function Dog(name) {
        this.name = name;
        this.name = name;
    }
    Dog.prototype.sayHello = function () {
        return ('Dog ' + this.name + ' say hello!');
    };
    return Dog;
}());
;
var Fish = (function () {
    function Fish(name) {
        this.name = name;
        this.name = name;
    }
    Fish.prototype.dive = function (howDeep) {
        return ('Im dive in ' + howDeep + 'met');
    };
    return Fish;
}());
;
function talkToPet(pet) {
    if (pet instanceof Dog)
        return pet.sayHello();
    if (pet instanceof Fish)
        return "Fish don't tailk";
    return null;
}
var dog = new Dog('Smokey');
var fish = new Fish('Eyes');
var monster = { name: 'Glummy' };
console.log(talkToPet(dog));
console.log(talkToPet(fish));
//# sourceMappingURL=mini_proj.js.map