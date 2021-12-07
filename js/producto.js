const producto = JSON.parse(localStorage.getItem('producto'));
const container = document.querySelector('.contenido');
const btnComprar = document.querySelector('.btn-comprar');

cargarEventListeners();

function cargarEventListeners() {
    document.addEventListener('DOMContentLoaded', dibujarProducto);
    // document.querySelectorAll('.producto-modal img').forEach(img => {
    //     img.addEventListener('click', function (e) {
    //         console.log('click');
    //         e.stopPropagation();
    //         this.parentNode.classList.add('active');
    //         this.classList.add('active')
    //     })
    // });
    
    // document.querySelectorAll('.producto-modal').forEach(img => {
    //     img.addEventListener('click', function (e) {
    //         e.stopPropagation();
    //         this.classList.remove('active');
    //         document.querySelectorAll('.producto-modal img').forEach(img => {
    //             img.classList.remove('active')
    //         });
    //     })
    // });
}

function dibujarProducto() {
    const divHTML = document.createElement('div');
    divHTML.setAttribute('class', 'producto');
    divHTML.innerHTML =
        `<img class="imgp" src="img/productos/${producto[0].imagen}">
        <h1 class="product-name">${producto[0].nombre}</h1>
        <p class="product-price">$${producto[0].precio}</p>
        <p class="product-stock">${producto[0].existencia > 0 ? `${producto[0].existencia} aún en existencia` : `Agotado`}</p>
        <button onclick="location.href='carrito.html'" type="button" class="btn-comprar">Agregar al carrito</button>
        <h2 class="descripcion">DESCRIPCIÓN:</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa excepturi voluptate veritatis, repudiandae assumenda natus odit temporibus veniam. Excepturi ab sed quod impedit aliquid placeat voluptatum dolorum accusamus quidem facere!</p>
        <div class="producto-modal">
            <img class="imagen-modal" src="img/productos/${producto[0].imagen}" alt="" width="100%">
        </div>`
    container.appendChild(divHTML);
}