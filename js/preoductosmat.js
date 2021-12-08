// Arreglo que contiene la información de los productos
const productos = JSON.parse(localStorage.getItem('dataBase'))

const contenidoIndex = document.querySelector('.productos-conteiner');

cargarEventListeners();

function cargarEventListeners() {
    document.addEventListener('DOMContentLoaded', pintarProductosIndex);
}

function pintarProductosIndex() {

    productos.forEach(index => {

        if (index.existencia > 0) {
            const divHtml = document.createElement('div');

            divHtml.setAttribute("class", "producto");

            divHtml.innerHTML = 
            `<img src="img/productos/${index.imagen}" alt="" class="product-img">
            <a href="producto.html" class="product-name" >${index.nombre}</a>
            <p class="product-price">$${index.precio}</p>
            <p class="product-stock">En existencia</p>
            <button type="button" class="btn-comprar">Comprar</button>`

            contenidoIndex.appendChild(divHtml);
        }
    })
}