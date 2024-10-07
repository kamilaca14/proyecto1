document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userContent = document.querySelector(".user-content");
    const loginForm = document.getElementById("loginForm");

    if (isLoggedIn) {
        userContent.classList.remove("hidden");
        loginForm.classList.add("hidden");
    } else {
        userContent.classList.add("hidden");
        loginForm.classList.remove("hidden");
    }
});

function authenticateUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "usuario" && password === "contrasena") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html";
    } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
}

document.getElementById("uploadButton").addEventListener("click", uploadDocument);

// Array para almacenar documentos
const documents = [];

// Función para cargar un documento
function uploadDocument() {
    const documentUpload = document.getElementById('documentUpload');
    const documentList = document.getElementById('documentList');
    
    const file = documentUpload.files[0];

    if (file) {
        const documentItem = document.createElement('li');
        documentItem.textContent = file.name;
        documents.push(file);
        documentList.appendChild(documentItem);
    }
}

