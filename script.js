const containerTwo = document.querySelector(".content-container-2");
const btn = document.querySelector(".btn");
const authorSection = document.querySelector(".author-section"); // Seção de autor

btn.addEventListener("click", () => {
  // Alterna a visibilidade do conteúdo adicional
  containerTwo.classList.toggle("toggle");

  // Alterna as classes de fundo e cor do botão
  document.body.classList.toggle("body-expanded");
  btn.classList.toggle("btn-expanded");

  // Altera a cor de fundo da seção de autor para acompanhar as mudanças
  authorSection.style.backgroundColor = document.body.classList.contains("body-expanded") 
    ? "#e74c3c"  // Cor amarela quando expandido
    : "#2c3e50"; // Cor original (escura)
});
