const numProductos=document.querySelector("#cantidad");
let listaProductos=[];
actualizarNumeroProductos();

function actualizarNumeroProductos(){
    listaProductos=JSON.parse(localStorage.getItem('CarritoLE'))||[];
    numProductos.textContent=listaProductos.length;
}