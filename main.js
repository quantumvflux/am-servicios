"use strict";

// NAVBAR LOGIC
const openBtn = document.querySelector(".hamburger-button");
const closeBtn = document.querySelector(".close-button");
const navBar = document.querySelector("nav");

// LINKS SELECTION
const linkSelect = () => {
  const links = document.querySelectorAll(".link");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navBar.classList.toggle("active");
    });
  });
};
linkSelect();

openBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

// CAROUSEL LOGIC

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
