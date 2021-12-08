// Arreglo que contiene la información de los productos
const dataBaseProductos = JSON.parse(localStorage.getItem('dataBase'))

//Valores
const precioMinimo = document.querySelector("#txtPreciomin");
const precioMaximo = document.querySelector("#txtPreciomax");

//Contenedor
const productosBuscados = document.querySelector(".productos-conteiner");

//Boton de Búsqueda
const botonBusqueda = document.querySelector("#boton-buscar");

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
    if (buscarCategoria != null)
        imprimirCategorias();
    if (buscarNombre != null)
        imprimirNombres();
    botonBusqueda.addEventListener("click", sacarValores);
    botonTruper.addEventListener("click", botonRadioPresionado);
    botonFoset.addEventListener("click", botonRadioPresionado);
    botonFiero.addEventListener("click", botonRadioPresionado);
    botonPretul.addEventListener("click", botonRadioPresionado);
    botonVolteck.addEventListener("click", botonRadioPresionado);
    botonCinsa.addEventListener("click", botonRadioPresionado);
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
                                            <p class="product-stock">En existencia</p>
                                            <button type="button" class="btn-comprar">Comprar</button>
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
                                            <p class="product-stock">En existencia</p>
                                            <button type="button" class="btn-comprar">Comprar</button>
                                        </div>`
            productosBuscados.appendChild(productoHTML);
        }
    });
    if (con == 0) {
        const mensajeHTML = document.createElement('div');
        mensajeHTML.innerHTML = `
                        <p> El producto no existe </p> `
        productosBuscados.appendChild(mensajeHTML);
    }
    localStorage.removeItem('nombre');
}

// Función que recoge los valores del precio
function sacarValores() {
    if (!botonTruper.checked && !botonPretul.checked && !botonFiero.checked && !botonFoset.checked && !botonVolteck.checked && !botonCinsa.checked) {
        valorMinimo = parseFloat(precioMinimo.value);
        valorMaximo = parseFloat(precioMaximo.value);
        if (Number.isNaN(valorMinimo) || Number.isNaN(valorMaximo))
            alert("Debe escribir algún rango de precio válido \nEj: 149 a 150")
    }
    imprimirProductos();
}

//Función que imprime los productos que cumplan con las características
function imprimirProductos() {
    while (productosBuscados.firstChild)
        productosBuscados.removeChild(productosBuscados.firstChild);
    dataBaseProductos.forEach(producto => {
        if (!botonTruper.checked && !botonPretul.checked && !botonFiero.checked && !botonFoset.checked && !botonVolteck.checked && !botonCinsa.checked) {
            if (producto.precio >= valorMinimo && producto.precio <= valorMaximo) {
                const productoHTML = document.createElement('div');
                productoHTML.innerHTML = `<div class="producto">
                                                <img src="img/productos/${producto.imagen}" alt="" class="product-img">
                                                <a href="producto.html" class="product-name">${producto.nombre}</a>
                                                <p class="product-price">$${producto.precio}</p>
                                                <p class="product-stock">En existencia</p>
                                                <button type="button" class="btn-comprar">Comprar</button>
                                            </div>`
                productosBuscados.appendChild(productoHTML);
            }
        }
        if (botonTruper.checked) {
            if (producto.marca == "Truper") {
                const productoHTML = document.createElement('div');
                productoHTML.innerHTML = `<div class="producto">
                                                <img src="img/productos/${producto.imagen}" alt="" class="product-img">
                                                <a href="producto.html" class="product-name">${producto.nombre}</a>
                                                <p class="product-price">$${producto.precio}</p>
                                                <p class="product-stock">En existencia</p>
                                                <button type="button" class="btn-comprar">Comprar</button>
                                            </div>`
                productosBuscados.appendChild(productoHTML);
            }
        }
        if (botonPretul.checked) {
            if (producto.marca == "Pretul") {
                const productoHTML = document.createElement('div');
                productoHTML.innerHTML = `<div class="producto">
                                                <img src="img/productos/${producto.imagen}" alt="" class="product-img">
                                                <a href="producto.html" class="product-name">${producto.nombre}</a>
                                                <p class="product-price">$${producto.precio}</p>
                                                <p class="product-stock">En existencia</p>
                                                <button type="button" class="btn-comprar">Comprar</button>
                                            </div>`
                productosBuscados.appendChild(productoHTML);
            }
        }
        if (botonFoset.checked) {
            if (producto.marca == "Foset") {
                const productoHTML = document.createElement('div');
                productoHTML.innerHTML = `<div class="producto">
                                                <img src="img/productos/${producto.imagen}" alt="" class="product-img">
                                                <a href="producto.html" class="product-name">${producto.nombre}</a>
                                                <p class="product-price">$${producto.precio}</p>
                                                <p class="product-stock">En existencia</p>
                                                <button type="button" class="btn-comprar">Comprar</button>
                                            </div>`
                productosBuscados.appendChild(productoHTML);
            }
        }
        if (botonFiero.checked) {
            if (producto.marca == "Fiero") {
                const productoHTML = document.createElement('div');
                productoHTML.innerHTML = `<div class="producto">
                                                <img src="img/productos/${producto.imagen}" alt="" class="product-img">
                                                <a href="producto.html" class="product-name">${producto.nombre}</a>
                                                <p class="product-price">$${producto.precio}</p>
                                                <p class="product-stock">En existencia</p>
                                                <button type="button" class="btn-comprar">Comprar</button>
                                            </div>`
                productosBuscados.appendChild(productoHTML);
            }
        }
        if (botonVolteck.checked) {
            if (producto.marca == "Volteck") {
                const productoHTML = document.createElement('div');
                productoHTML.innerHTML = `<div class="producto">
                                                <img src="img/productos/${producto.imagen}" alt="" class="product-img">
                                                <a href="producto.html" class="product-name">${producto.nombre}</a>
                                                <p class="product-price">$${producto.precio}</p>
                                                <p class="product-stock">En existencia</p>
                                                <button type="button" class="btn-comprar">Comprar</button>
                                            </div>`
                productosBuscados.appendChild(productoHTML);
            }
        }
        if (botonCinsa.checked) {
            if (producto.marca == "CINSA") {
                const productoHTML = document.createElement('div');
                productoHTML.innerHTML = `<div class="producto">
                                                <img src="img/productos/${producto.imagen}" alt="" class="product-img">
                                                <a href="producto.html" class="product-name">${producto.nombre}</a>
                                                <p class="product-price">$${producto.precio}</p>
                                                <p class="product-stock">En existencia</p>
                                                <button type="button" class="btn-comprar">Comprar</button>
                                            </div>`
                productosBuscados.appendChild(productoHTML);
            }
        }
    });
}

function botonRadioPresionado() {
    if (!botonTruper.checked && !botonPretul.checked && !botonFiero.checked && !botonFoset.checked && !botonVolteck.checked && !botonCinsa.checked) {
        precioMinimo.disabled = false;
        precioMaximo.disabled = false;
        precioMinimo.value = "";
        precioMaximo.value = "";
    }
    else {
        precioMinimo.disabled = true;
        precioMaximo.disabled = true;
        precioMinimo.value = "--------";
        precioMaximo.value = "--------";
    }
}
