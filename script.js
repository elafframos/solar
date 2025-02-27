function pagina() {
    window.location.href = 'form.html'
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active"); // Alterna entre mostrar e esconder o menu
    });
});
