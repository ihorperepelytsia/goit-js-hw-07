"use strict";

const box = document.querySelector("#boxes");
const input = document.querySelector("#controls input");
const createButton = document.querySelector('button[data-action="render"]');
const clearButton = document.querySelector('button[data-action="destroy"]');

let size = 25;

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function createBoxes(amount) {
  for (let i = 0; i < +amount; i++) {
    const div = document.createElement("div");
    div.style = `margin-right: 5px;
    height: ${size}px;
    width: ${size}px;
    background-color: rgb(${randomInteger(1, 256)},${randomInteger(1,256)},${randomInteger(1, 256)})`;
    box.append(div);
    size += 10;
  }
}

createButton.addEventListener("click", function() {
  createBoxes(input.value);
});

function destroyBoxes() {
  size = 25;
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }
}

clearButton.addEventListener("click", destroyBoxes);
