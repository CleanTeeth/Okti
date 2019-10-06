const menu = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

menu.addEventListener('click', function() {
  menu.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation--active');
}, false);