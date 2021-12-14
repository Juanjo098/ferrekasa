const informacionUsuario = document.querySelector('.informacion_usuario');
const productosComprados = document.querySelector('.productos_comprados');
const informacionPago = document.querySelector('.container_pago');
const datosUsuario = JSON.parse(localStorage.getItem('login')) || true;
const datosProductos = JSON.parse(localStorage.getItem('CarritoLE'));
const costo = JSON.parse(localStorage.getItem('costo'));
const formaDePago = JSON.parse(localStorage.getItem('forma_pago'));
const confirmarCompra = document.querySelector('.confirmar');
let registroCompras = JSON.parse(localStorage.getItem('registroCompras')) || [];
let fecheDeCompra;

cargarEventListeners();

function cargarEventListeners() {
    document.addEventListener('DOMContentLoaded', () =>{
        dibujarDatosUsuario();
        dibujarProductosComprados();
        dibujarDatosDePago();
    })
    confirmarCompra.addEventListener('click', () =>{
        completarCompra();
    })
}

function dibujarDatosUsuario(){
    if (datosUsuario != true) {
        delete datosUsuario.password;
        Object.entries(datosUsuario).forEach((campo) => {
            const trHTML = document.createElement('tr')
            trHTML.innerHTML =
                `<th>${campo[0].toUpperCase()}:</th>
                        <td>${campo[1]}</td>`;
            informacionUsuario.appendChild(trHTML);
        });
    }
    else{
        const trHTML = document.createElement('tr')
        trHTML.innerHTML =
            `<th>Usuario: </th>
            <td>Anónimo</td>`;
        informacionUsuario.appendChild(trHTML);
    }
}

function dibujarProductosComprados() {
    let index=1;
    datosProductos.forEach((producto) =>{
        const trHTML = document.createElement('tr')
        trHTML.innerHTML =
            `<td>${index++}</td>
            <td>${producto.id}</td>
            <td class="imagen"><img src="img/productos/${producto.imagen}" alt="Error 404"></td>
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td>$${producto.precio}</td>
            <td>$${producto.precio * producto.cantidad}</td>`;
        productosComprados.appendChild(trHTML);
    });
}

function dibujarDatosDePago() {
    fecheDeCompra = fechaActual();
    const pago = document.createElement('table')
    pago.setAttribute('class', 'pago')
    pago.innerHTML =
                    `<tr>
                        <th>Fecha:</th>
                        <td>${fecheDeCompra.day}/${fecheDeCompra.month}/${fecheDeCompra.year}</td>
                    </tr>
                    <tr>
                        <th>Forma de pago:</th>
                        <td>${formaDePago.forma_de_pago.toUpperCase()}</td>
                    </tr>
                    <tr>
                        <th>Subtotal:</th>
                        <td>$${costo.subtotal}</td>
                    </tr>
                    <tr>
                        <th>Envio:</th>
                        <td>$${costo.envio}</td>
                    </tr>
                    <tr>
                        <th>Total:</th>
                        <td>$${costo.total}</td>
                    </tr>`
    informacionPago.appendChild(pago);
}

function completarCompra() {
    const dataBase = JSON.parse(localStorage.getItem('dataBase'));
    const dataBaseUpdate = dataBase.map((producto) =>{
        let index = 0;
        const productosCarrito = datosProductos.filter((p) =>{
            if (p.id == producto.id){
                index++;
                return p;
            }
        });
        if (index != 0){
            producto.existencia -= productosCarrito[0].cantidad;
            return producto;
        }
        return producto;
    })
    if (registroCompras.length == 0){
        const tmp = registrarDatos();
        registroCompras = [...registroCompras,tmp]
        localStorage.setItem('registroCompras', JSON.stringify(registroCompras));
    }
    else{
        registroCompras = [...registroCompras, registrarDatos()];
        localStorage.setItem('registroCompras', JSON.stringify(registroCompras));
    }
    localStorage.removeItem('CarritoLE');
    localStorage.removeItem('costo');
    localStorage.removeItem('forma_pago');
    actualizarDataBase(dataBaseUpdate);
    location.href = 'compra_confirmada.html'
}

function fechaActual() {
    const date = new Date;
    return { day: date.getUTCDate(), month: date.getUTCMonth() + 1, year: date.getUTCFullYear() };
}

function actualizarDataBase(dataBaseUpdate) {
    localStorage.setItem('dataBase', JSON.stringify(dataBaseUpdate));
}

function registrarDatos() {
    return {
        usuario: datosUsuario,
        productos: datosProductos,
        forma_de_pago: formaDePago,
        costo: costo,
        fecha: fecheDeCompra
    };
}