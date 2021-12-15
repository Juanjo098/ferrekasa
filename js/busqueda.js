// Arreglo que contiene la información de los productos
const dataBaseProductos = JSON.parse(localStorage.getItem('dataBase'))

//Valores
const precioMinimo = document.querySelector("#txtPreciomin");
const precioMaximo = document.querySelector("#txtPreciomax");

//Contenedor
const productosBuscados = document.querySelector(".productos-conteiner");

//Boton de Búsqueda
const botonBusqueda = document.querySelector("#boton-buscar");

// Contenedor que almacena los filtros
const filtros = document.querySelector('.filtros')

//Botones de Radio
const botonTruper = document.querySelector("#optruper");
const botonPretul = document.querySelector("#oppretul");
const botonFoset = document.querySelector("#opfoset");
const botonFiero = document.querySelector("#opfiero");
const botonVolteck = document.querySelector("#opvolteck");
const botonCinsa = document.querySelector("#opcinsa");

//alex
//const botonBusquedaArriba = document.querySelector('.boton-bus')
const buscarCategoria = JSON.parse(localStorage.getItem('categoria')) || null;
const buscarNombre = JSON.parse(localStorage.getItem('nombre')) || null;

//Añadiendo evento al botón de búsqueda
eventos();

function eventos() {
    dibujarFiltros();
    if (buscarCategoria != null)
        imprimirCategorias();
    if (buscarNombre != null)
        imprimirNombres();
    botonBusqueda.addEventListener("click", obtenerMarcas);
}

function imprimirCategorias() {
    dataBaseProductos.forEach(producto => {
        const categorias = producto.categoria.toUpperCase();
        if (categorias == buscarCategoria.categoria.toUpperCase()) {
            const productoHTML = document.createElement('div');
            productoHTML.innerHTML = `<div class="producto">
                                            <img src="img/productos/${producto.imagen}" alt="" class="product-img">
                                            <a href="producto.html" class="product-name">${producto.nombre}</a>
                                            <p class="product-price">$${producto.precio}</p>
                                            ${producto.existencia > 0 ? `<p class="product-stock">En existencia</p>` : `<p class="product-stock agotado">Agotado</p>`}
                                            ${producto.existencia > 0 ? `<button type="button" class="btn-comprar">Comprar</button>` : ``}
                                        </div>`
            productosBuscados.appendChild(productoHTML);
        }
    });
    localStorage.removeItem('categoria');
}

function imprimirNombres() {
    let con = 0;
    dataBaseProductos.forEach(producto => {
        const nomProducto = producto.nombre.toUpperCase();
        if (nomProducto.includes(buscarNombre.nombre)) {
            con++;
            const productoHTML = document.createElement('div');
            productoHTML.innerHTML = `<div class="producto">
                                            <img src="img/productos/${producto.imagen}" alt="" class="product-img">
                                            <a href="producto.html" class="product-name">${producto.nombre}</a>
                                            <p class="product-price">$${producto.precio}</p>
                                            ${producto.existencia > 0 ? `<p class="product-stock">En existencia</p>` : `<p class="product-stock agotado">Agotado</p>`}
                                            ${producto.existencia > 0 ? `<button type="button" class="btn-comprar">Comprar</button>` : ``}
                                        </div>`
            productosBuscados.appendChild(productoHTML);
        }
    });
    if (con == 0) {
        const mensajeHTML = document.createElement('div');
        mensajeHTML.innerHTML = `<p> El producto no existe </p>`
        productosBuscados.appendChild(mensajeHTML);
    }
    localStorage.removeItem('nombre');
}

// Se dibujan los filtros por marcas
function dibujarFiltros() {
    const marcas = JSON.parse(localStorage.getItem('marcas'));
    marcas.forEach((marca) => {
        const divHTML = document.createElement('div');
        divHTML.innerHTML =
                            `<input type="checkbox" class="checkbox" name="${marca}" id="${marca}">
                            <label for="${marca}" class="a">${marca}</label>`;
        filtros.appendChild(divHTML);
    })
}

// Se determia qué checkboxes están marcadas
function obtenerMarcas(){
    // Areglo que contendrá los IDs de las checkboxes marcadas
    let checkboxMarcadas = []
    filtros.querySelectorAll('.checkbox').forEach((check) => {
        if (check.checked)
            checkboxMarcadas.push(check.id);
    })
    dibujarProductosMarcados(checkboxMarcadas);
}

function dibujarProductosMarcados(checkboxMarcadas) {
    const min = precioMinimo.value;
    const max = precioMaximo.value;
    while (productosBuscados.firstChild)
        productosBuscados.removeChild(productosBuscados.firstChild);
    checkboxMarcadas.forEach((marca) => {
        dataBaseProductos.forEach(producto => {
            if (marca == producto.marca && producto.precio > min && producto.precio < max) {
                const productoHTML = document.createElement('div');
                productoHTML.innerHTML = `<div class="producto">
                                                <img src="img/productos/${producto.imagen}" alt="" class="product-img">
                                                <a href="producto.html" class="product-name">${producto.nombre}</a>
                                                <p class="product-price">$${producto.precio}</p>
                                                ${producto.existencia > 0 ? `<p class="product-stock">En existencia</p>` : `<p class="product-stock agotado">Agotado</p>`}
                                                ${producto.existencia > 0 ? `<button type="button" class="btn-comprar">Comprar</button>` : ``}
                                            </div>`
                productosBuscados.appendChild(productoHTML);
            }
        });
    });
}