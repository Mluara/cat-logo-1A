document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".btn-proximo");
    const passos = document.querySelectorAll(".passo");

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const proximo = botão.getAttribute("data-proximo");

            passos.forEach(passo => passo.classList.remove("ativo"));

            const próximoPasso = document.getElementById(`passo-${proximo}`);
            if (proximoPasso) {
                próximoPasso.classList.add("ativo");
            }
        });
    });
});
