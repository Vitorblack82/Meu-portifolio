
// Efeito ao rolar usando ScrollReveal
ScrollReveal().reveal('header', { delay: 300, origin: 'top', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.sobre', { delay: 500, origin: 'left', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.projeto', { interval: 200, origin: 'bottom', distance: '30px', duration: 800 });
ScrollReveal().reveal('.contato', { delay: 500, origin: 'right', distance: '50px', duration: 1000 });

VanillaTilt.init(document.querySelectorAll(".projeto"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2
});

document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

function copiarEmail() {
  const email = "apvitor@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    const mensagem = document.getElementById("mensagem-copiar");
    mensagem.style.display = "block";
    setTimeout(() => {
      mensagem.style.display = "none";
    }, 2500);
  });
}