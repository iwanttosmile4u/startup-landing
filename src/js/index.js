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
  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('navigation__open');
    });
  }
};
showMenu('#burger', '#nav');
