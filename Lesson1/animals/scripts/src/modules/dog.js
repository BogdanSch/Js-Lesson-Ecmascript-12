import { Animal } from "./animal.js";

export class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age, breed);
  }
  walk() {
    let result = super.move();
    result += `\n${this.name} walks like a dog`;
    return result;
  }
}
