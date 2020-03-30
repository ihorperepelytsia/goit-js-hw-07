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
  let result = [];
  for (let i = 0; i < +amount; i++) {
    let div = document.createElement("div");
    div.style = `margin-right: 5px;
    height: ${size}px;
    width: ${size}px;
    background-color: rgb(${randomInteger(1, 256)},${randomInteger(1,256)},${randomInteger(1, 256)})`;
    size += 10;
    result.push(div);
  }
  box.append(...result)
}

createButton.addEventListener("click", () => createBoxes(input.value));

function destroyBoxes() {
  size = 25;
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }
}

clearButton.addEventListener("click", destroyBoxes);





// / function getListContent() {
  //   let result = [];
  //   for(let i=1; i<=3; i++) {
  //     let li = document.createElement('li');
  //     li.append(i);
  //     result.push(li);
  //   }
  
  //   return result;
  // }
  // ul.append(...getListContent())