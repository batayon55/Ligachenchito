// Reducción de la cabecera fija al hacer scroll en la página
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (header) {
    if (window.scrollY > 50) {
      header.style.padding = '5px 0';
      header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.5)';
    } else {
      header.style.padding = '15px 0';
      header.style.boxShadow = 'none';
    }
  }
});

// Funcionamiento del menú desplegable para móviles
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const navMenu = document.getElementById('nav-menu');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Cierra el menú móvil al hacer clic en un enlace de navegación
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
});
