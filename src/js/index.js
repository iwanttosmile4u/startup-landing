// Hamburger menu - changing button

const menuBtn = document.querySelector('.header__menu-btn');
const burgerItem = document.querySelector('.header__burger-btn');
let activeBtn = false;

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
  const main = document.querySelector('.home__main');
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

// Slider for tablet and desktop

let slideIndex = 1;
showSlides(slideIndex);

function addSlides(num) {
  showSlides((slideIndex += num));
}

function currentSlide(numb) {
  showSlides((slideIndex = numb));
}

function showSlides(elem) {
  let i;
  const slides = document.getElementsByClassName('slider__card');
  const dots = document.getElementsByClassName('dot');

  if (elem > slides.length) {
    slideIndex = 1;
  }

  if (elem < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'flex';
  dots[slideIndex - 1].className += ' active';
}
