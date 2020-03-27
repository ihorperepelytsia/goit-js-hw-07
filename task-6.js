"use strict";

const input = document.querySelector("#validation-input");

function inputChek(event) {
  if (event.currentTarget.value.length === +input.dataset.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    return;
  }
  input.classList.remove("valid");
  input.classList.toggle("invalid");
}

input.addEventListener("blur", inputChek);
