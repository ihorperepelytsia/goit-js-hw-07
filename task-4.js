"use strict";

let counterValue = 0;

const value = document.querySelector("#value");
const increment = function() {
  counterValue += 1;
  value.textContent = counterValue;
};

const decrement = function() {
  counterValue -= 1;
  value.textContent = counterValue;
};

document
  .querySelector('button[data-action="increment"]')
  .addEventListener("click", increment);
document
  .querySelector('button[data-action="decrement"]')
  .addEventListener("click", decrement);
