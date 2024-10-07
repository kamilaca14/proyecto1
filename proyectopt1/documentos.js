// JavaScript para manejar la carga de documentos, organización por categorías y búsqueda
const documentList = document.getElementById("documentList");
const addDocumentButton = document.getElementById("addDocument");
const fileInput = document.getElementById("fileInput");
const categorySelect = document.getElementById("categorySelect");
const searchInput = document.querySelector(".search-input");

// Supongamos que tienes un arreglo de documentos existentes con categorías
const documentos = [
    { nombre: "Solicitud 1", categoria: "solicitudes", url: "solicitud1.pdf" },
    { nombre: "Solicitud 2", categoria: "solicitudes", url: "solicitud2.pdf" },
    { nombre: "Solicitud 3", categoria: "solicitudes", url: "solicitud3.pdf" },
    { nombre: "Solicitud 4", categoria: "solicitudes", url: "solicitud4.pdf" },
    { nombre: "Solicitud 5", categoria: "solicitudes", url: "solicitud5.pdf" },
    { nombre: "Reingreso 1", categoria: "reingresos", url: "reingreso1.pdf" },
    { nombre: "Reingreso 2", categoria: "reingresos", url: "reingreso2.pdf" },
    { nombre: "Reingreso 3", categoria: "reingresos", url: "reingreso3.pdf" },
    { nombre: "Reingreso 4", categoria: "reingresos", url: "reingreso4.pdf" },
    { nombre: "Reingreso 5", categoria: "reingresos", url: "reingreso5.pdf" },
    { nombre: "Retiro 1", categoria: "retiro", url: "retiro1.pdf" },
    { nombre: "Retiro 2", categoria: "retiro", url: "retiro2.pdf" },
    { nombre: "Retiro 3", categoria: "retiro", url: "retiro3.pdf" },
    { nombre: "Retiro 4", categoria: "retiro", url: "retiro4.pdf" },
    { nombre: "Retiro 5", categoria: "retiro", url: "retiro5.pdf" },
    { nombre: "Malla 1", categoria: "mallas", url: "malla1.pdf" },
    { nombre: "Malla 2", categoria: "mallas", url: "malla2.pdf" },
    { nombre: "Malla 3", categoria: "mallas", url: "malla3.pdf" },
    { nombre: "Malla 4", categoria: "mallas", url: "malla4.pdf" },
    { nombre: "Malla 5", categoria: "mallas", url: "malla5.pdf" },
    { nombre: "Justificación 1", categoria: "justificacion", url: "justificacion1.pdf" },
    { nombre: "Justificación 2", categoria: "justificacion", url: "justificacion2.pdf" },
    { nombre: "Justificación 3", categoria: "justificacion", url: "justificacion3.pdf" },
    { nombre: "Justificación 4", categoria: "justificacion", url: "justificacion4.pdf" },
    { nombre: "Justificación 5", categoria: "justificacion", url: "justificacion5.pdf" },
];

// Función para agregar documentos
function agregarDocumentos() {
    documentList.innerHTML = ""; // Limpiar la lista
    const categoriaSeleccionada = categorySelect.value;
    const busqueda = searchInput.value.toLowerCase(); // Obtener la búsqueda en minúsculas

    if (categoriaSeleccionada === "todos") {
        // Agrupar los documentos por categoría
        const categorias = {};
        documentos.forEach((documento) => {
            if (busqueda === "" || documento.nombre.toLowerCase().includes(busqueda)) {
                if (!categorias[documento.categoria]) {
                    categorias[documento.categoria] = [];
                }
                categorias[documento.categoria].push(documento);
            }
        });

        // Crear una tabla de 5 columnas para mostrar los documentos
        const table = document.createElement("table");
        const tbody = document.createElement("tbody");
        let tr;

        for (const categoria in categorias) {
            if (categorias.hasOwnProperty(categoria)) {
                const documentosCategoria = categorias[categoria];

                for (let i = 0; i < documentosCategoria.length; i++) {
                    if (i % 5 === 0) {
                        tr = document.createElement("tr");
                    }

                    const documento = documentosCategoria[i];
                    const td = document.createElement("td");
                    const link = document.createElement("a");
                    link.href = documento.url;
                    link.textContent = documento.nombre;
                    td.appendChild(link);
                    tr.appendChild(td);

                    if (i % 5 === 4 || i === documentosCategoria.length - 1) {
                        tbody.appendChild(tr);
                    }
                }
            }
        }

        table.appendChild(tbody);
        documentList.appendChild(table);
    } else {
        // Mostrar documentos de la categoría seleccionada
        documentos.forEach((documento) => {
            if (
                documento.categoria === categoriaSeleccionada &&
                (busqueda === "" || documento.nombre.toLowerCase().includes(busqueda))
            ) {
                const listItem = document.createElement("li");
                const link = document.createElement("a");
                link.href = documento.url;
                link.textContent = documento.nombre;
                listItem.appendChild(link);
                documentList.appendChild(listItem);
            }
        });
    }
}

// Función para manejar la carga de documentos
function cargarDocumento(event) {
    const file = event.target.files[0];
    if (file) {
        const nombreDocumento = file.name;
        const categoriaSeleccionada = categorySelect.value;
        // Debes implementar la lógica para subir el documento al servidor
        // y luego agregarlo a la lista de documentos con la categoría seleccionada
        // Ejemplo:
        // const urlDocumento = subirDocumentoAlServidor(file);
        // agregarDocumentoALaLista(nombreDocumento, urlDocumento, categoriaSeleccionada);
    }
}

// Agregar evento de clic al botón de "Añadir Documento"
addDocumentButton.addEventListener("click", function () {
    fileInput.click();
});

// Agregar evento de cambio al campo de archivo
fileInput.addEventListener("change", cargarDocumento);

// Agregar evento de cambio a la selección de categoría
categorySelect.addEventListener("change", agregarDocumentos);

// Agregar evento de cambio al campo de búsqueda
searchInput.addEventListener("input", agregarDocumentos);

// Inicialmente, agregar documentos existentes a la lista
agregarDocumentos();
