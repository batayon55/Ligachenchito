// Liga Chenchito
// Versión 1.0

document.addEventListener("DOMContentLoaded", () => {

    // Botón Inicio
    const botonInicio = document.querySelector(".menu button:nth-child(1)");

    if (botonInicio) {
        botonInicio.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Botón Estadísticas
    const botonEstadisticas = document.querySelector(".menu button:nth-child(2)");
    const seccionEstadisticas = document.querySelector("#estadisticas");

    if (botonEstadisticas && seccionEstadisticas) {
        botonEstadisticas.addEventListener("click", () => {
            seccionEstadisticas.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

});
