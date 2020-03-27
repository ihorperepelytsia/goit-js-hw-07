"use strict";

const categories = document.querySelectorAll(".item");
console.log(`В списке ${categories.length} категории`);

for(let value of categories) {
    console.log(`Категория: ${value.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${value.querySelectorAll("li").length}`);
}