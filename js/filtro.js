const radios = document.querySelectorAll('.input');
const productos = document.querySelectorAll('.producto');

function filtrar() {
    const seleccionado = document.querySelector('.input:checked').value;
    productos.forEach(producto => {
        const tipo = producto.getAttribute("data-tipo");
        if (seleccionado === "todas" || tipo === seleccionado) {
            producto.classList.remove("oculto");
        } else {
            producto.classList.add("oculto");
        }
    });
}

radios.forEach(radio => {
    radio.addEventListener('change', filtrar);
});

// Mostrar todos al cargar
window.onload = filtrar;