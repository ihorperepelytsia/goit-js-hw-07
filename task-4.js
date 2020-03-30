"use strict";

let counterValue = 0;

const value = document.querySelector("#value");
function increment() {
  value.textContent = counterValue += 1;
}

function decrement() {
  value.textContent = counterValue -= 1;
}

document
  .querySelector('button[data-action="increment"]')
  .addEventListener("click", increment);
document
  .querySelector('button[data-action="decrement"]')
  .addEventListener("click", decrement);
