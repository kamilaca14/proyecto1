document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita el envío del formulario por defecto
  
      // Obtenemos los valores de los campos de entrada
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Realizamos una validación simple (puedes personalizarla según tus necesidades)
      if (username === "" || password === "") {
        alert("Por favor, complete todos los campos.");
      } else {
        alert("Inicio de sesión exitoso.");
        form.reset(); // Limpia los campos del formulario
      }
    });
  
    // Redirección al hacer clic en "Registrarme"
    const registrationLink = document.querySelector(".create-account a");
    registrationLink.addEventListener("click", function (event) {
      event.preventDefault(); // Evita la acción predeterminada del enlace
      window.location.href = "registro.html"; // Redirige a la página de registro
    });
  
    // Redirección al hacer clic en "Olvidé mi contraseña"
    const forgotPasswordLink = document.querySelector(".forgot-password a");
    forgotPasswordLink.addEventListener("click", function (event) {
      event.preventDefault(); // Evita la acción predeterminada del enlace
      window.location.href = "recuperar-contrasena.html";// Redirige a la página de recuperación de contraseña
    });
  });
  
document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login-button");
  
  loginButton.addEventListener("click", function (event) {
      event.preventDefault(); // Evita el envío del formulario por defecto

      // Obtenemos los valores de los campos de entrada
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Realizamos una validación simple (puedes personalizarla según tus necesidades)
      if (username === "" || password === "") {
          alert("Por favor, complete todos los campos.");
      } else {
          alert("Inicio de sesión exitoso.");
          window.location.href = "principal.html"; // Redirige a la página principal
      }
  });
});

  
  