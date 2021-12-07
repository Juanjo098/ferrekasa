const btnContinuarCompra = document.getElementById('btn-compra'); 

btnContinuarCompra.addEventListener('click', () =>{
    location.href = "pago.html";
}); 

const contenidoCarrito = document.querySelector('.contenedor-items');
const totalProductos = document.querySelector('.total-productos');
const costoEnvio = document.querySelector('.costo-envio');
const montoTotal = document.querySelector('.monto-total');
let carrito=[];

cargarEvenntListeners();

function cargarEvenntListeners(){
    document.addEventListener('DOMContentLoaded', () =>{
        carrito = JSON.parse(localStorage.getItem('CarritoLE')) || [];
        pintarRenglonesTabla();
    });
}

// Funcion que renderice los div en el carrito
function pintarRenglonesTabla(){
    carrito.forEach( producto => {
        const divHtml = document.createElement('div');
        divHtml.setAttribute("class", "articulo");
        divHtml.innerHTML=     ` <div>
                                    <img class="imagen" src=${producto.imagen}>
                                </div>

                                <div class="salto">
                                    <p class="nombre-articulo">${producto.nombre}</p>
                                </div>

                                <div class="salto">
                                    <div class="centra-precio">
                                        <p class="precio">Precio</p>
                                    </div>

                                    <div>
                                        <p class="precio-articulo">${producto.precio}</p>
                                    </div>
                                </div>

                                <div class="salto">
                                    <div class="centra-cantidad">
                                        <p>${producto.cantidad}</p>
                                    </div>

                                    <div class="cantidad" id="cantidad">
                                        <input type="number" value="1" min="1" max="10">
                                    </div>
                                </div>

                                <div class="salto">
                                    <div class="eliminar-item">
                                        <p>Eliminar</p>
                                    </div>

                                    <div class="boton-basura" onclick=eliminarProduto(${producto.id});>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash"
                                                width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="4" y1="7" x2="20" y2="7" />
                                                <line x1="10" y1="11" x2="10" y2="17" />
                                                <line x1="14" y1="11" x2="14" y2="17" />
                                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>`
        contenidoCarrito.appendChild(divHtml); 
    });
    sincronizarLocalStorage(); 
    
    realizarCalculos();
}

// Funcion que realice los calculos
function realizarCalculos(){
    let subTotal = 0;
    let totalpro = 0;
    let costoev = 0;

    carrito.forEach(producto =>{
        producto.precio= producto.precio.replace('$', '');
        subTotal = parseFloat(producto.precio) * producto.cantidad;
        montot += subTotal;
        totalpro += producto.cantidad;
    });

    if(Total < 2000)
       costoev = 250;
    // Calcular al Gran Total
    let granTotal = Total + costoev;
    //DEsplegar los resultados en la pagina
    totalProductos.textContent = formatoMoneda(totalpro);
    costoEnvio.textContent = formatoMoneda(costoev);
    montoTotal.textContent = formatoMoneda(granTotal);     
}

// Funcion para dar formato a numeros
function formatoMoneda(cantidad) {
    let valor = (cantidad).toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
    });
    return valor;
}

// Funcion que elimina un producto del carrito
function eliminarProduto(idProducto){
    //alert("Desde eliminar producto" + idProducto);
    // Filtrar productos que no correspondan con el id del producto que quiero eliminar
    carrito = carrito.filter(producto => producto.id != idProducto);
    // Renderizar div donde se posicionan los productos
    pintarRenglonesTabla();

    // Realizar los calculos
    realizarCalculos();
}

// Función que actualice en LocalStorage
function sincronizarLocalStorage(){
    localStorage.setItem('CarritoGpoB', JSON.stringify(carrito));
}


