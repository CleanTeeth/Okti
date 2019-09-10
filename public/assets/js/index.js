const menu = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

menu.addEventListener('click', function() {
  menu.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation--active');
}, false);

const nav_items = document.querySelectorAll(".navigation__item");
const loginForm = document.querySelector(".login__form");
const registerForm = document.querySelector(".register__form");

// Login form
nav_items[0].addEventListener("click", () => {
  console.log("ass");
  loginForm.classList.toggle('login__form--active');
  nav.classList.toggle("navigation--active");
  menu.classList.toggle('hamburger--active');
});

// Register form
nav_items[1].addEventListener("click", () => {
  console.log("ass");
  registerForm.classList.toggle('register__form--active');
  nav.classList.toggle("navigation--active");
  menu.classList.toggle('hamburger--active');
});

console.log(nav_items[0]);
console.log(nav_items[1]);
