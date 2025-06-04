const lenis = new Lenis({
  autoRaf: true,
});


if (window.innerWidth <= 1024) {
  const items = document.querySelectorAll('.pastille-item');

  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => {
        if (i !== item) i.classList.remove('hover');
      });
      item.classList.toggle('hover');
    });
  });
}


const burger = document.querySelector('.burger-icon');
const sideMenu = document.querySelector('.side-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  sideMenu.classList.toggle('active');
});

document.addEventListener('click', function(event) {
  const burger = document.querySelector('.burger-icon');
  const sideMenu = document.querySelector('.side-menu');

  const isClickInsideBurger = burger.contains(event.target);
  const isClickInsideMenu = sideMenu.contains(event.target);

  if (!isClickInsideBurger && !isClickInsideMenu && sideMenu.classList.contains('active')) {
    sideMenu.classList.remove('active');
    burger.classList.remove('active');
  }
});
