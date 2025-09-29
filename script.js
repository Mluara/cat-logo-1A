document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".btn-proximo");
    const passos = document.querySelectorAll(".passo");

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const proximo = botao.getAttribute("data-proximo");

            passos.forEach(passo => passo.classList.remove("ativo"));

            const proximoPasso = document.getElementById(`passo-${proximo}`);
            if (proximoPasso) {
                proximoPasso.classList.add("ativo");
            }
        });
    });
});
