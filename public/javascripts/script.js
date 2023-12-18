function viewDescription(bookNumber) {
    window.location.href = `livro${bookNumber}`;
  }
  
  // Adiciona um evento de clique aos botões "Ver Descrição"
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".view-button");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        const bookNumber = button.getAttribute("data-book");
        viewDescription(bookNumber);
      });
    });
  });
  