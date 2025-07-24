const botonesFiltro = document.querySelectorAll(".boton-filtro");
const imagenes = document.querySelectorAll(".imagen-personalizada");

/** Escuchamos el evento de "click" de todos los botones con la clase `.boton-filtro`. */
botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    const filterValue = boton.getAttribute("data-categoria");

    /** Para cada imagen, las escondemos con `display: none` y las mostramos
     * solamente si el valor del boton (el "filterValue") esta en el listado de
     * clases. Si es asi, las volvemos a mostrar con `display: block`. */
    imagenes.forEach((imagen) => {
      imagen.style.display = "none";
      if (filterValue === "todos" || imagen.classList.contains(filterValue)) {
        imagen.style.display = "block";
      }
    });
  });
});
