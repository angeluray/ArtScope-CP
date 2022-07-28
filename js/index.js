const menuHamburguer = document.querySelector('.burger-menu');
const myNav = document.querySelector('.organizer');
const myBody = document.querySelector('body');

menuHamburguer.addEventListener('click', () => {
  menuHamburguer.classList.toggle('active');
  myNav.classList.toggle('active');
  myBody.classList.toggle('active');
});

document.querySelectorAll('.link-nav').forEach((n) => n.addEventListener('click', () => {
  menuHamburguer.classList.remove('active');
  myNav.classList.remove('active');
}));
