"use strict";

// NAVBAR LOGIC
const openBtn = document.querySelector(".hamburger-button");
const closeBtn = document.querySelector(".close-button");
const navBar = document.querySelector("nav");

function replaceEmotes() {
  const links = document.querySelectorAll(".link");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navBar.classList.toggle("active");
    });
  });
}
replaceEmotes();

openBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

// SLIDER LOGIC
let counter = 1;

document.querySelector(".next").addEventListener("click", () => {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 2) {
    counter = 1;
  }
});
document.querySelector(".prev").addEventListener("click", () => {
  document.getElementById("radio" + counter).checked = true;
  counter--;
  if (counter < 1) {
    counter = 2;
  }
});
