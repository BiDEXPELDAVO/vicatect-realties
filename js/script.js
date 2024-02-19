"use strict";
const menuBar = document.querySelector("#menu-bar");
const nav = document.querySelector("nav");

menuBar.addEventListener("click", function () {
  nav.classList.toggle("hidden");
});
