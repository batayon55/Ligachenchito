// Liga Chenchito
// Versión 1.0

document.addEventListener("DOMContentLoaded", () => {

    const menu = document.querySelector(".menu");
    const botones = menu ? menu.querySelectorAll("button") : [];

    const inicio = document.querySelector("main");
    const estadisticas = document.querySelector(".estadisticas");

    // Botón Inicio
    if (botones[0]) {
        botones[0].addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Botón Estadísticas
    if (botones[1] && estadisticas) {
        botones[1].addEventListener("click", () => {
            estadisticas.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

});
