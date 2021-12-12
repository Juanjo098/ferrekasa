const opcionesPago = document.querySelector('.opciones');

cargarEventListeners();

function cargarEventListeners() {
    opcionesPago.addEventListener('click', e => formaDePago(e));
}

function formaDePago(e) {
    if (e.target.parentNode.parentNode.classList.contains('forma-pago')){
        e.preventDefault();
        localStorage.setItem('forma_pago', JSON.stringify({forma_de_pago: e.target.parentNode.parentNode.id}))
        location.href = 'datos_compra.html'
    }
}