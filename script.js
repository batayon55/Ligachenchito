// Reducción de cabecera al hacer scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (window.scrollY > 50) {
    header.style.padding = '5px 0';
  } else {
    header.style.padding = '10px 0';
  }
});

// Menú desplegable para móviles
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}
