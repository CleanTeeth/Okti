window.onload = function () {
  const menu = document.querySelector('.hamburger');
  const nav = document.querySelector('.navigation');


  menu.addEventListener('click', function () {
    menu.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
  }, false);

  const nav_items = document.querySelectorAll(".navigation__item");
  const loginForm = document.querySelector(".login__form");
  const registerForm = document.querySelector(".register__form");
  const credits = document.querySelector(".credits");



  // Login form
  nav_items[0].addEventListener("click", () => {
    if ($('.register__form--active').is(':visible')) {
      registerForm.classList.toggle("register__form--active");
    }
    if ($('.credits--active').is(':visible')) {
      credits.classList.toggle("credits--active");
    }

    loginForm.classList.toggle('login__form--active');
    nav.classList.toggle("navigation--active");
    menu.classList.toggle('hamburger--active');
  });

  // Register form
  nav_items[1].addEventListener("click", () => {
    if ($('.login__form--active').is(':visible')) {
      loginForm.classList.toggle("login__form--active");
    }
    if ($('.credits--active').is(':visible')) {
      credits.classList.toggle("credits--active");
    }

    registerForm.classList.toggle('register__form--active');
    nav.classList.toggle("navigation--active");
    menu.classList.toggle('hamburger--active');
  });

  nav_items[2].addEventListener('click', () => {
    if ($('.register__form--active').is(':visible')) {
      registerForm.classList.toggle("register__form--active");
    }

    if ($('.login__form--active').is(':visible')) {
      loginForm.classList.toggle("login__form--active");
    }

    nav.classList.toggle("navigation--active");
    menu.classList.toggle('hamburger--active');
    credits.classList.toggle('credits--active');
  });
}