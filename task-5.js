"use strict";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", nameGuest);

function nameGuest(event) {
  output.textContent =
    event.currentTarget.value !== "" ? event.currentTarget.value : "Neznacomec";
}
