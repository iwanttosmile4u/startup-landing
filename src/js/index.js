const menuBtn = document.querySelector('.header__menu-btn');
const burgerItem = document.querySelector('.header__burger-btn');
let activeBtn = false;

// Hamburger menu - changing button

menuBtn.addEventListener('click', () => {
  if (!activeBtn) {
    menuBtn.classList.add('burger-open');
    burgerItem.classList.add('burger-open__burger-btn');
    activeBtn = true;
  } else {
    menuBtn.classList.remove('burger-open');
    burgerItem.classList.remove('burger-open__burger-btn');
    activeBtn = false;
  }
});

// Showing menu - mobile and tablet

const showMenu = (btn, menuList) => {
  const toggleBtn = document.querySelector(btn);
  const menu = document.querySelector(menuList);
  const main = document.querySelector('.main');
  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('navigation__open');
      if (document.querySelector('.navigation__open')) {
        main.style.marginTop = '350px';
      } else {
        main.style.marginTop = '150px';
      }
    });
  }
};
showMenu('#burger', '#nav');
