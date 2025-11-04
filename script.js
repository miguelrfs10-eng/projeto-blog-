// Espera até que toda a página seja carregada
document.addEventListener("DOMContentLoaded", iniciarMenu);

function iniciarMenu() {
  // Pega o botão e o menu
  var botao = document.querySelector(".menu-toggle");
  var menu = document.querySelector(".nav");

  // Quando clicar no botão, alterna o menu aberto/fechado
  botao.addEventListener("click", function() {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active"); // Fecha o menu
    } else {
      menu.classList.add("active"); // Abre o menu
    }
  });
}
