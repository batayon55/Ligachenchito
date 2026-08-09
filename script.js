// Liga Chenchito
// Versión 1.0

document.addEventListener("DOMContentLoaded", () => {

    const botonInicio = document.getElementById("btn-inicio");

    if (botonInicio) {
        botonInicio.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});
