"use strict";

const input = document.querySelector("#validation-input");

function inputChek(event) {
  if (event.currentTarget.value.length === +input.dataset.length) {
    input.classList.remove('invalid');
    return input.classList.add("valid");
  }
 input.classList.toggle("invalid");
}

input.addEventListener("blur", inputChek);
