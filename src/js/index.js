const navToggle = document.querySelector('.header__menu-btn');
const navList = document.querySelector('.navbar');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('nav-open');
});
