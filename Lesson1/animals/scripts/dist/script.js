"use strict";

var _dog = require("./modules/dog.js");
var _cat = require("./modules/cat.js");
// const content = document.querySelector(".content");

var dog = new _dog.Dog("Buddy", 4, "Golden Retriever");
var cat = new _cat.Cat("Whiskers", 3, "Siamese");

// content.innerHTML = "";

function displayContent(message) {
  //content.innerHTML += `<p>${message}</p>`;
  console.log("".concat(message, "\n"));
}
displayContent(dog.walk());
displayContent(cat.walk());