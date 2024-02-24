import { Dog } from "./modules/dog.js";
import { Cat } from "./modules/cat.js";

const content = document.querySelector(".content");

const dog = new Dog("Buddy", 4, "Golden Retriever");
const cat = new Cat("Whiskers", 3, "Siamese");

content.innerHTML = "";

function displayContent(message) {
  content.innerHTML += `<p>${message}</p>`;
}

displayContent(dog.walk());
displayContent(cat.walk());
