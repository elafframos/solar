function toggleMenu() {
    let menu = document.querySelector(".menu");

    // Alterna entre 'block' e 'none'
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 300); // Tempo de espera antes de rolar
        }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.history.pushState(null, null, targetId); // Atualiza a URL sem recarregar
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});
