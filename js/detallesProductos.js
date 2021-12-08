const productos2 = JSON.parse(localStorage.getItem('dataBase'))

const contenidoIndex2 = document.querySelector('.productos-conteiner');

cargarEventListeners();

function cargarEventListeners() {
    contenidoIndex2.addEventListener('click', e => informacionProducto(e));
}

function informacionProducto(e) {
    if (e.target.classList.contains("product-name")){
        localStorage.setItem("producto", JSON.stringify(productos2.filter(producto => producto.nombre == e.target.textContent)))
        location.href = "producto.html";
    }
}