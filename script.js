
const botones = document.querySelectorAll("[data-mision]");
const aviso = document.getElementById("aviso");

botones.forEach(function(boton) {
  boton.addEventListener("click", function() {
    const mision = boton.dataset.mision;

    const mensajes = {
      historia: "🏺 ¡Pronto podrás investigar los secretos del pasado!",
      geografia: "🌎 ¡Pronto podrás explorar mapas y territorios!",
      sociedad: "🕵️ ¡Pronto podrás resolver misterios de la sociedad!"
    };

    aviso.textContent = mensajes[mision];
    aviso.classList.add("visible");
  });
});
