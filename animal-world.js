import { Cat } from "./inheritence/Cat.js";
import { Dog } from "./inheritence/Dog.js";

console.clear();

const rexas = new Dog('Rex', 'aviganis');
console.log(rexas.voice());

const brisius = new Dog('Brisius', 'taksas');
console.log(brisius.voice());

const rainis = new Cat('Rainis', 'bengalu');
console.log(rainis.voice());

const tom = new Cat('Tom', 'animacinis');
console.log(tom.voice());