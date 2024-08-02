import { Pet } from "./Pet.js";

export class Cat extends Pet {
    constructor(name, bread) {
        super(name);
        this.bread = bread;
        this.animalType = 'cat';
        this.sound = 'miau';
        this.emoji = '🐈';
        this.emojiCount = 2;
    }
}