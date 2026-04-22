function abrirModal(titulo, rutaImagen) {
    const modal = document.getElementById("modalGeneral");
    const textoTitulo = document.getElementById("modal-titulo");
    const imagen = document.getElementById("modal-imagen");

    // Insertamos los datos dinámicos
    textoTitulo.innerText = "Vista de " + titulo;
    imagen.src = rutaImagen;

    // Mostramos el modal
    modal.style.display = "block";
}

function cerrarModal() {
    document.getElementById("modalGeneral").style.display = "none";
}

// Cerrar al hacer clic fuera de la caja
window.onclick = function(event) {
    const modal = document.getElementById("modalGeneral");
    if (event.target == modal) {
        cerrarModal();
    }
}