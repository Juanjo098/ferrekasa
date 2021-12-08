
//boton de buscar por nombre 
const botonBusquedaArriba = document.querySelector('.boton-buscar')
//constsante que contiene las categorias 
const categorias = document.querySelectorAll('.categorias a');


//funcion para crear almacenamiento de manera local de las categorias
cargarEventListeners();

function cargarEventListeners() {//CREAMOS UN ALMACENAMIENTO DE MANERA LOCAL PARA PODER ACEDER ALO QUE HIZO FER 
    //creamos el almacenamiento local 
    categorias.forEach(categoria => categoria.addEventListener('click', e => categoriaSelecionada(e)))

}

//botonBusquedaArriba.addEventListener('click', cargarPorNombre())


//FUNCION PARA PODER VER CUAL FUE LA CATEGORIA SELECIONADA 
function categoriaSelecionada(categoria) {
    categoria.preventDefault();
    localStorage.setItem('categoriaprecionada',JSON.stringify({cat:categoria.target.id}))//LO ULTIMO ES PARA APUNTAR LA CATEGORIA
    location.href='busqueda.html';//esto recarga la pagina 
}








