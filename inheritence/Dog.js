import { Pet } from "./Pet.js";

export class Dog extends Pet {
    constructor(name, bread) {
        super(name, bread);
        this.animalType = 'dog';
        this.sound = 'au';
        this.emoji = '🐕';
        this.emojiCount = 4;
    }
}