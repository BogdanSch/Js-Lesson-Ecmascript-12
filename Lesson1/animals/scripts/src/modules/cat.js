import { Animal } from "./animal.js";

export class Cat extends Animal {
  constructor(name, age, breed) {
    super(name, age, breed);
  }
  walk() {
    let result = super.move();
    const { name, age, breed } = this;
    result += `\n${name} walks like a ${breed} cat`;
    return result;
  }
}
