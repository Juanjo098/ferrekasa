//Declarar variables
const listaProductos = document.querySelector('.lista-productos');
const CarritoLocalE = document.querySelector(".productos-conteiner");
const numProductos = document.querySelector("#cantidad");
const BDProductos = JSON.parse(localStorage.getItem('dataBase'));


let carrito = [];
cargarEventListeners();

function cargarEventListeners() {
    CarritoLocalE.addEventListener('click', e => {
        cargarProducto(e);
        actualizarNumeroProductos();
        sincronizarLocalStorage();
    });
    carrito = JSON.parse(localStorage.getItem('CarritoLE')) || [];
    actualizarNumeroProductos();
}

function cargarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-comprar')) {
        const producto = e.target.parentElement;
        const nomProducto = producto.querySelector(".product-name").textContent;
        const index = BDProductos.findIndex(producto => producto.nombre == nomProducto);
        if (index != -1) {
            let infoProducto = BDProductos[index];
            if (!carrito.some(producto => producto.id == infoProducto.id)) {
                infoProducto = {...infoProducto, cantidad: 1};
                if (infoProducto.existencia > 0) {
                    carrito = [...carrito, infoProducto]
                }
            }
        }
    }
}

function sincronizarLocalStorage() {
    localStorage.setItem('CarritoLE', JSON.stringify(carrito));
}

function actualizarNumeroProductos() {
    numProductos.textContent = carrito.length;
}