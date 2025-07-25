document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const alerta = document.getElementById("alerta");

    alerta.innerHTML = `
    <div class="alert alert-success" role="alert">
      ¡Mensaje enviado correctamente! Nos pondremos en contacto contigo.
    </div>
  `;

    alerta.style.display = "block";
    this.reset();
});