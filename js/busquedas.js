const categorias = document.querySelectorAll('.categorias a');
const btnBuscar = document.querySelector('#btn-buscar');
const input = document.querySelector('#busqueda');

cargarEventListeners();

function cargarEventListeners() {
    categorias.forEach(categoria => categoria.addEventListener('click', e => categoriaSelecionada(e)))
    btnBuscar.addEventListener('click', nombreBuscado)
}

function categoriaSelecionada(e) {
    e.preventDefault();
    localStorage.setItem('categoria', JSON.stringify({categoria: e.target.id}))
    location.href = 'busqueda.html';
}

function nombreBuscado() {
    localStorage.setItem('nombre', JSON.stringify({nombre: input.value.toUpperCase()}))
    location.href = 'busqueda.html';
}