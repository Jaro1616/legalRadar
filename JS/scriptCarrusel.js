fetch("JSON/carruselImagenes.json")
  .then(response => response.json())
  .then(data => {
    let indice = 0;
    const img = document.getElementById("imagenCarrusel");
    const btnPrev = document.getElementById("prev");
    const btnNext = document.getElementById("next");

    // Mostrar la primera imagen
    img.src = "IMG/carrusel/" + data[indice].imagen;

    // Botón siguiente
    btnNext.addEventListener("click", () => {
      indice = (indice + 1) % data.length;
      img.src = "IMG/carrusel/" + data[indice].imagen;
    });

    // Botón anterior
    btnPrev.addEventListener("click", () => {
      indice = (indice - 1 + data.length) % data.length;
      img.src = "IMG/carrusel/" + data[indice].imagen;
    });
  })
  .catch(error => console.error("Error cargando JSON:", error));
