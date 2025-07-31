const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.list-nav');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});