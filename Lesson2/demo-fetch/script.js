"use strict";

const url = "./data/books.json";

const loadBooks = async () => {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
};

loadBooks();
