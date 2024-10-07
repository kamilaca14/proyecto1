// Variables para elementos del DOM
const modal = document.getElementById("modal");
const editarPerfilButton = document.getElementById("editar-perfil");
const cerrarModal = document.getElementById("cerrar-modal");
const perfilEdicionForm = document.getElementById("perfil-edicion");
const nombreInput = document.getElementById("nombre");
const correoInput = document.getElementById("correo");
const telefonoInput = document.getElementById("telefono");
const paisInput = document.getElementById("pais");
const provinciaInput = document.getElementById("provincia");
const cantonInput = document.getElementById("canton");
const profileInfo = document.querySelector(".profile-info");

// Función para abrir el formulario de edición
function abrirFormularioEdicion() {
    modal.style.display = "block"; // Muestra el formulario
    profileInfo.style.display = "none"; // Oculta la información de perfil
}

// Función para cerrar el formulario de edición
function cerrarFormularioEdicion() {
    modal.style.display = "none"; // Oculta el formulario
    profileInfo.style.display = "block"; // Muestra la información de perfil
}

// Evento al hacer clic en "Editar Perfil"
editarPerfilButton.addEventListener("click", abrirFormularioEdicion);

// Evento al hacer clic en el botón de cierre del formulario
cerrarModal.addEventListener("click", cerrarFormularioEdicion);

// Evento de envío del formulario de edición
perfilEdicionForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario

    // Aquí puedes agregar la lógica para guardar los cambios en el perfil.
    // Por ejemplo, podrías enviar los datos al servidor a través de una solicitud AJAX.

    // Luego de guardar los cambios, cierra el formulario de edición.
    cerrarFormularioEdicion();
});
