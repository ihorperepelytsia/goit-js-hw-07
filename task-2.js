"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createLi = vegetables => {
  const li = document.createElement("li");
  li.innerText = vegetables;
  return li;
};

const ingredientsList = ingredients.map(el => createLi(el));

const ul = document.querySelector("#ingredients");
ul.append(...ingredientsList);
