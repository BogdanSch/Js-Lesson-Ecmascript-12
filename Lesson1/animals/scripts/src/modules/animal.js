export class Animal {
  #name;
  #age;

  constructor(name, age, breed) {
    this.#name = name;
    this.#age = age;
    this.breed = breed;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    this.#age = newAge;
  }

  move() {
    return `${this.#name} moves`;
  }
}
