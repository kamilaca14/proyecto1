// Función para validar la contraseña
function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}

// Función para validar el número de teléfono
function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

// Función para validar la cédula (10 dígitos)
function validateCedula(cedula) {
    const cedulaRegex = /^\d{10}$/;
    return cedulaRegex.test(cedula);
}

// Función para mostrar mensajes de error
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}

// Función para borrar mensajes de error
function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = '';
}

// Manejar la validación al enviar el formulario
const form = document.getElementById('registro-form');
form.addEventListener('submit', function (event) {
    const password = document.getElementById('Contraseña').value;
    const phone = document.getElementById('telefono').value;
    const cedula = document.getElementById('cedula').value;

    clearError('password-error');
    clearError('phone-error');
    clearError('cedula-error'); // Limpia mensajes de error previos

    if (!validatePassword(password)) {
        event.preventDefault();
        showError('password-error', 'La contraseña debe tener al menos 8 caracteres y contener letras y números.');
    }

    if (!validatePhone(phone)) {
        event.preventDefault();
        showError('phone-error', 'El número de teléfono debe tener 10 dígitos.');
    }

    if (!validateCedula(cedula)) {
        event.preventDefault();
        showError('cedula-error', 'La cédula debe tener 10 dígitos.');
    }
});

// Agregar la validación para país, provincia y cantón aquí

document.getElementById('registro-form').addEventListener('submit', function (event) {
    // Obtener los valores de los campos y eliminar espacios en blanco
    var pais = document.getElementById('pais').value.trim();
    var provincia = document.getElementById('provincia').value.trim();
    var canton = document.getElementById('canton').value.trim();

    // Obtener los elementos para mostrar mensajes de error
    var countryError = document.getElementById('country-error');
    var provinceError = document.getElementById('province-error');
    var cantonError = document.getElementById('canton-error');

    // Función para mostrar mensajes de error
    function showError(element, message) {
        element.innerText = message;
        element.style.color = 'red';
    }

    // Función para borrar mensajes de error
    function clearError(element) {
        element.innerText = '';
    }

    // Validación de país
    if (pais === '') {
        showError(countryError, 'Ingrese un país válido.');
        event.preventDefault();
    } else {
        clearError(countryError);
    }

    // Validación de provincia
    if (provincia === '') {
        showError(provinceError, 'Ingrese una provincia válida.');
        event.preventDefault();
    } else {
        clearError(provinceError);
    }

    // Validación de cantón
    if (canton === '') {
        showError(cantonError, 'Ingrese un cantón válido.');
        event.preventDefault();
    } else {
        clearError(cantonError);
    }
});
