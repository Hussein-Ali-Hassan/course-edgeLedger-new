// declaring variables in js: var, let, const

// getting html elements in js
// GET single element by id: document.getElementById("cta-btn");
// GET single element by class: document.querySelector(".cta-btn");
// GET multiple elements by class: document.querySelectorAll(".cta-btn");

const navbar = document.querySelector(".navbar");

// add event listener to the window every time the user scroll
window.onscroll = toggleNavBg;

function toggleNavBg() {
  // check where the scroll is (vertical)
  if (window.scrollY > 600) {
    // if he passed () value we will add bg to the navbar
    navbar.classList.add("nav-bg");
  }
  // else we will remove it
  else navbar.classList.remove("nav-bg");
}
