document.addEventListener("DOMContentLoaded", () => {
    const inicioSection = document.querySelector("#inicio");
  
    const inicioContent = `
      <div class="hero">
        <div class="hero-text">
          <h1>¡Bienvenidos a Novedades Mayer!</h1>
          <p>Descubre lo mejor en productos y promociones.</p>
          <a href="#productos" class="btn">Explorar</a>
        </div>
      </div>
  
      <div class="destacados">
        <h2>Productos Destacados</h2>
        <div class="productos-grid">
          <div class="producto">
            <img src="public/img/imgInicio/Surf.jpeg" alt="Producto 1">
            <h3>Producto 1</h3>
            <p>$10.99</p>
            <a href="#producto1" class="btn">Comprar Ahora</a>
          </div>
          <div class="producto">
            <img src="public/img/imgInicio/RickMorty.jpeg" alt="Producto 1">
            <h3>Producto 2</h3>
            <p>$10.99</p>
            <a href="#producto2" class="btn">Comprar Ahora</a>
          </div>
        </div>
      </div>
    `;
  
    inicioSection.innerHTML = inicioContent;
  });
  