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

/* =========================================================
   BARRA FIJA AL HACER SCROLL
   ========================================================= */

const barraScroll = document.getElementById("barraScroll");

window.addEventListener("scroll", () => {

    if (window.scrollY > 180) {

        barraScroll.classList.add("visible");

    } else {

        barraScroll.classList.remove("visible");

    }

});
