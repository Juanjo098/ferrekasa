const producto = JSON.parse(localStorage.getItem('producto'));
const container = document.querySelector('.contenido');
const cantProd = document.querySelector('#cantidad');
let imagenModal;
let imagen;

cargarEventListeners();

function cargarEventListeners() {
    document.addEventListener('DOMContentLoaded', dibujarProducto);
    container.addEventListener('click', e => cargarProducto(e));
}

function dibujarProducto() {
    const divHTML = document.createElement('div');
    divHTML.setAttribute('class', 'producto');
    divHTML.innerHTML =
        `<img class="imgp" src="img/productos/${producto[0].imagen}">
        <h1 class="product-name">${producto[0].nombre}</h1>
        <p class="product-price">$${producto[0].precio}</p>
        <p class="product-stock">${producto[0].existencia > 0 ? `${producto[0].existencia} aún en existencia` : `Agotado`}</p>
        <button type="button" class="btn-comprar">Agregar al carrito</button>
        <h2 class="descripcion">DESCRIPCIÓN:</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa excepturi voluptate veritatis, repudiandae assumenda natus odit temporibus veniam. Excepturi ab sed quod impedit aliquid placeat voluptatum dolorum accusamus quidem facere!</p>
        <div class="producto-modal">
            <img class="imagen-modal" src="img/productos/${producto[0].imagen}" alt="" width="100%">
        </div>`
        container.appendChild(divHTML);
        imagenModal = document.querySelector('.producto-modal');
        imagen = document.querySelector('.producto-modal img');

        imagen.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.add('active');
            this.parentNode.classList.add('active');
        });
        imagenModal.addEventListener('click', function() {
            this.classList.remove('active');
            this.querySelector('img').classList.remove('active');
        });
}

function cargarProducto(e) {
    if (e.target.classList.contains('btn-comprar')) {
        productoCart = producto[0];
        productoCart = {...productoCart, cantidad: 1}
        let carrito = JSON.parse(localStorage.getItem('CarritoLE') || []);
        if (carrito != []){
            if (!carrito.some(prod => prod.id == productoCart.id))
                carrito = [...carrito, productoCart]
        }
        else{
            carrito = [...productoCart]
        }
        sincronizarProductosCarrito(carrito);
        actualizarNumeroProductos(carrito.length);
    }
}

function sincronizarProductosCarrito(carrito) {
    localStorage.setItem('CarritoLE', JSON.stringify(carrito));
}

function actualizarNumero(num) {
    cantProd.textContent = num;
}