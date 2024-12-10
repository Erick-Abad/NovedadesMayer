document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeModal = document.querySelector('.close');

  // Mostrar/Ocultar el menú móvil
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    mobileMenu.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
        mobileMenu.classList.remove('active');
      }
    });

    document.addEventListener('click', (event) => {
      if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
        mobileMenu.classList.remove('active');
      }
    });
  } else {
    console.error("Elementos .hamburger o .mobile-menu no encontrados en el DOM");
  }

  // Mostrar imagen en modal al hacer clic
  document.querySelectorAll('.producto img').forEach((img) => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImage.src = img.src;
    });
  });

  // Cerrar modal al hacer clic en el botón de cierre
  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.classList.contains('close')) {
      modal.style.display = 'none';
    }
  });
});
