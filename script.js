const botao = document.querySelector('.botao')

function pagina() {
    window.location.href = 'form.html'
}

function toggleMenu() {
    let menu = document.querySelector(".menu");

    // Alterna entre 'block' e 'none'
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
