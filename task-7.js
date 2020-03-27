"use strict";

const text = document.querySelector("#text");

function changeFontSize(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}

document
  .querySelector("#font-size-control")
  .addEventListener("input", changeFontSize);
