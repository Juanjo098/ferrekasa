const numProductos=document.querySelector("#cantidad");
let carrito=[];
actualizarNumeroProductos();

function actualizarNumeroProductos(){
    carrito=JSON.parse(localStorage.getItem('CarritoLE'))||[];
    numProductos.textContent=carrito.length;
}