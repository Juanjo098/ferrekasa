const input = document.querySelector('#busqueda');
const contenedorCategorias = document.querySelector(".categorias");
let categorias;

document.addEventListener('DOMContentLoaded', cargarEventListeners)

function cargarEventListeners() {
    cargarCategroias();
    categorias.forEach(categoria => categoria.addEventListener('click', e => categoriaSelecionada(e)))
    input.addEventListener('keypress', e => { envio(e) })
}

function cargarCategroias() {
    const cat = JSON.parse(localStorage.getItem('categorias'));
    cat.forEach(categoria => {
        const liHTML = document.createElement("li");
        liHTML.innerHTML =
            `<li><a href="busqueda.html" id="${categoria}">${categoria}</a></li>`
        contenedorCategorias.appendChild(liHTML);
    });
    categorias = document.querySelectorAll('.categorias a');
}

function categoriaSelecionada(e) {
    e.preventDefault();
    localStorage.setItem('categoria', JSON.stringify({categoria: e.target.id }))
    location.href = 'busqueda.html';
}

function envio(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        localStorage.setItem('nombre', JSON.stringify({nombre: input.value.toUpperCase() }))
        location.href = 'busqueda.html';
    }
}