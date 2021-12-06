// Arreglo que contiene la información de los productos
const dataBaseProductos =[
    {
        id: 1 /* (entero) */,
        nombre: "Disco De Diamante, Rin Continuo, 4-1/2' " /* (cadena) */,
        imagen: "pro1.jpeg",
        precio: 149 ,
        marca: "Truper" /* (cadena) */,
        categoria: "Consumibles" /* (cadena) */,
        existencia: 10/* (entero) todos con el mismo número de existencias */
    },
    {
        id: 2 /* (entero) */,
        nombre: "Pinzas pela cables automática " /* (cadena) */,
        imagen: "pro2.jpeg",
        precio: 355,
        marca: "Truper" /* (cadena) */,
        categoria: "Herramientas" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 3 /* (entero) */,
        nombre: "Multímetro Digital Prof. 500 V" /* (cadena) */,
        imagen: "pro3.jpeg",
        precio: 355,
        marca: "Truper" /* (cadena) */,
        categoria: "Herramientas" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 4 /* (entero) */,
        nombre: "Desbrozadora de césped Truper DES-1000 1000W color negro y naranja 127V " /* (cadena) */,
        imagen:"pro4.jpeg", ///(cadena)/
        precio: 1975,
        marca: "Truper"/* (cadena) */,
        categoria: "Herramientas" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 5 /* (entero) */,
        nombre: "Marro Octagonal 4 Lbs, Mango Fibra De Vidrio" /* (cadena) */,
        imagen: "pro5.jpeg",
        precio: 280,
        marca: "Truper" /* (cadena) */,
        categoria: "Herramientas" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 6 /* (entero) */,
        nombre: "Termofusora  600 W" /* (cadena) */,
        imagen: "pro6.jpeg",
        precio: 1650,
        marca: "Foset" /* (cadena) */,
        categoria: "Plomeria" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 7 /* (entero) */,
        nombre: "Dado para termofusora 32mm 1’ " /* (cadena) */,
        imagen: "pro7.jpeg",
        precio: 199,
        marca: "Foset" /* (cadena) */,
        categoria: "Plomeria" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 8 /* (entero) */,
        nombre: "Válvula esfera roscable ½ " /* (cadena) */,
        imagen: "pro8.jpeg",
        precio: 76,
        marca: "Foset" ,
        categoria: "Plomeria" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 9 /* (entero) */,
        nombre: "Regulador de gas de una vía " /* (cadena) */,
        imagen: "pro9.jpeg",
        precio: 124,
        marca: "Foset" /* (cadena) */,
        categoria: "Plomeria" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 10 /* (entero) */,
        nombre: "Monomando PARA FREGADERO, CUELLO ALTO" /* (cadena) */,
        imagen: "pro10.jpeg",
        precio: 2030,
        marca: "Foset" /* (cadena) */,
        categoria: "Plomeria" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 11 /* (entero) */,
        nombre: "Contracanasta 3-12” Riviera de acero inoxidable con tapa" /* (cadena) */,
        imagen: "pro11.jpeg" ,
        precio: 169,
        marca: "Foset" /* (cadena) */,
        categoria: "Plomeria" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 12 /* (entero) */,
        nombre: "Arandelas planas ½’ 50pzas " /* (cadena) */,
        imagen: "pro12.jpeg",
        precio: 129,
        marca: "Fiero" /* (cadena) */,
        categoria: "Consumibles" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 13/* (entero) */,
        nombre: "Pija hexagonal punta de broca 1 ¼’ 100pzas   " /* (cadena) */,
        imagen: "pro13.jpeg",
        precio: 89,
        marca: "Fiero" /* (cadena) */,
        categoria: "Consumibles" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 14/* (entero) */,
        nombre: "Pija cabeza de cuadro punta de broca 2’ 100pzas" /* (cadena) */,
        imagen: "pro14.jpeg",
        precio: 56,
        marca: "Fiero" /* (cadena) */,
        categoria: "Consumibles" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 15/* (entero) */,
        nombre: "Abrazadera tipo sinfín ¾ - 1 ¾ 10pzas  " /* (cadena) */,
        imagen: "pro15.jpeg",
        precio: 89,
        marca: "Fiero" /* (cadena) */,
        categoria: "Consumibles" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 16/* (entero) */,
        nombre: "Abrazadera tipo omega 1-1/2’ 5pzas " /* (cadena) */,
        imagen: "pro16.jpeg",
        precio: 26,
        marca: "Volteck" /* (cadena) */,
        categoria: "Consumibles" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 17/* (entero) */,
        nombre: "Compresor 20 litros lubricado " /* (cadena) */,
        imagen: "pro17.jpeg",
        precio: 2499,
        marca: "Pretul" /* (cadena) */,
        categoria: "Herramientas" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 18/* (entero) */,
        nombre: "Hidrolavadora eléctrica 1300 Psi " /* (cadena) */,
        imagen: "pro18.jpeg" ,
        precio: 2230,
        marca: "Pretul" /* (cadena) */,
        categoria: "Herramientas" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 19/* (entero) */,
        nombre: "Taladro eléctrico inalámbrico 600rpm 12v  " /* (cadena) */,
        imagen: "pro19.jpeg" ,
        precio: 775,
        marca: "Pretul" /* (cadena) */,
        categoria: "Herramientas" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 20/* (entero) */,
        nombre: "Flexómetro/ cinta métrica de 5m " /* (cadena) */,
        imagen: "pro20.jpeg" ,
        precio: 55,
        marca: "Pretul" /* (cadena) */,
        categoria: "Herramientas" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 21/* (entero) */,
        nombre: "Extensión de uso rudo cal. 16 4m " /* (cadena) */,
        imagen: "pro21.jpeg" ,
        precio: 105,
        marca: "Volteck" /* (cadena) */,
        categoria: "Consumibles" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 22/* (entero) */,
        nombre: "Portalámparas plástico E26 3 ½’" /* (cadena) */,
        imagen: "pro22.jpeg",
        precio: 30,
        marca: "Volteck" /* (cadena) */,
        categoria: "Consumibles" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 23/* (entero) */,
        nombre: "Portalámparas plástico indestructible café  " /* (cadena) */,
        imagen: "pro23.jpeg",
        precio: 16,
        marca: "Volteck" /* (cadena) */,
        categoria: "Consumibles" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 24/* (entero) */,
        nombre: "Portalámparas con censor de movimiento " /* (cadena) */,
        imagen: "pro24.jpeg",
        precio: 178,
        marca: "Volteck" /* (cadena) */,
        categoria: "Consumibles" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 25/* (entero) */,
        nombre: "Multicontacto aterrizado 6 tomas con interruptor " /* (cadena) */,
        imagen: "pro25.jpeg",
        precio: 125,
        marca: "Volteck" /* (cadena) */,
        categoria: "Consumibles" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 26/* (entero) */,
        nombre: "Pila AA Carbón-Zinc 4pzas " /* (cadena) */,
        imagen: "pro26.jpeg",
        precio: 23,
        marca: "Volteck" /* (cadena) */,
        categoria: "Consumibles" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 27/* (entero) */,
        nombre: "Alambre de púas 4.8kg 100m cal: 15.5" /* (cadena) */,
        imagen: "pro27.jpeg",
        precio: 1085,
        marca: "Fiero" /* (cadena) */,
        categoria: "Consumibles" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 28/* (entero) */,
        nombre: "Diablito de carga, soporta 450kg" /* (cadena) */,
        imagen: "pro28.jpeg",
        precio: 1696,
        marca: "Fiero" /* (cadena) */,
        categoria: "Herramientas" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 29/* (entero) */,
        nombre: "Calentador de deposito capacidad 30L " /* (cadena) */,
        imagen: "pro29.jpeg",
        precio: 1696,
        marca: "CINSA" /* (cadena) */,
        categoria: "Plomeria" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    },
    {
        id: 30/* (entero) */,
        nombre: "Botas Industriales de PVC " /* (cadena) */,
        imagen: "pro30.jpeg",
        precio: 315,
        marca: "Truper" /* (cadena) */,
        categoria: "Consumibles" /* (cadena) */,
        existencia: 10 /* (entero) todos con el mismo número de existencias */
    }
];

//Valores
let precioMinimo=document.querySelector("#txtPreciomin");
let precioMaximo=document.querySelector("#txtPreciomax");

//Contenedor
const productosBuscados=document.querySelector(".productos-conteiner");

//Boton de Búsqueda
const botonBusqueda=document.querySelector("#boton-buscar");

//Botones de Radio
const botonTruper=document.querySelector("#optruper");
const botonPretul=document.querySelector("#oppretul");
const botonFoset=document.querySelector("#opfoset");
const botonFiero=document.querySelector("#opfiero");
const botonVolteck=document.querySelector("#opvolteck");
const botonCinsa=document.querySelector("#opcinsa");

//Variables de precio
let valorMinimo=0, valorMaximo=0;

//Añadiendo evento al botón de búsqueda
eventos();

function eventos(){
   botonBusqueda.addEventListener("click", sacarValores);
   botonTruper.addEventListener("click", botonRadioPresionado);
   botonFoset.addEventListener("click", botonRadioPresionado);
   botonFiero.addEventListener("click", botonRadioPresionado);
   botonPretul.addEventListener("click", botonRadioPresionado);
   botonVolteck.addEventListener("click", botonRadioPresionado);
   botonCinsa.addEventListener("click", botonRadioPresionado);
}

// Función que recoge los valores del precio
function sacarValores(){
    if(!botonTruper.checked && !botonPretul.checked && !botonFiero.checked && !botonFoset.checked && !botonVolteck.checked && !botonCinsa.checked){
        valorMinimo = parseFloat(precioMinimo.value);
        valorMaximo = parseFloat(precioMaximo.value);
        if(Number.isNaN(valorMinimo) || Number.isNaN(valorMaximo))
            alert("Debe escribir algún rango de precio válido \nEj: 149 a 150")
    }
    while(productosBuscados.firstChild)
        productosBuscados.removeChild(productosBuscados.firstChild);
    imprimirProductos();
}

//Función que imprime los productos que cumplan con las características
function imprimirProductos(){
    dataBaseProductos.forEach(producto =>{
            if(!botonTruper.checked && !botonPretul.checked && !botonFiero.checked && !botonFoset.checked && !botonVolteck.checked && !botonCinsa.checked){
                if(producto.precio>=valorMinimo && producto.precio<=valorMaximo)
                {
                    const productoHTML=document.createElement('div');
                    productoHTML.innerHTML=`<div class="producto">
                                                <img src="img/productos/${producto.imagen}" alt="" class="product-img">
                                                <a href="producto.html" class="product-name">${producto.nombre}</a>
                                                <p class="product-price">$${producto.precio}</p>
                                                <p class="product-stock">En existencia</p>
                                                <button type="button" class="btn-comprar">Comprar</button>
                                            </div>`
                    productosBuscados.appendChild(productoHTML);
                }
            }
            if(botonTruper.checked){
                if(producto.marca=="Truper"){
                    const productoHTML=document.createElement('div');
                    productoHTML.innerHTML=`<div class="producto">
                                                <img src="img/productos/${producto.imagen}" alt="" class="product-img">
                                                <a href="producto.html" class="product-name">${producto.nombre}</a>
                                                <p class="product-price">$${producto.precio}</p>
                                                <p class="product-stock">En existencia</p>
                                                <button type="button" class="btn-comprar">Comprar</button>
                                            </div>`
                    productosBuscados.appendChild(productoHTML);
                }
            }
            if(botonPretul.checked){
                if(producto.marca=="Pretul"){
                    const productoHTML=document.createElement('div');
                    productoHTML.innerHTML=`<div class="producto">
                                                <img src="img/productos/${producto.imagen}" alt="" class="product-img">
                                                <a href="producto.html" class="product-name">${producto.nombre}</a>
                                                <p class="product-price">$${producto.precio}</p>
                                                <p class="product-stock">En existencia</p>
                                                <button type="button" class="btn-comprar">Comprar</button>
                                            </div>`
                    productosBuscados.appendChild(productoHTML);
                }
            }
            if(botonFoset.checked){
                if(producto.marca=="Foset"){
                    const productoHTML=document.createElement('div');
                    productoHTML.innerHTML=`<div class="producto">
                                                <img src="img/productos/${producto.imagen}" alt="" class="product-img">
                                                <a href="producto.html" class="product-name">${producto.nombre}</a>
                                                <p class="product-price">$${producto.precio}</p>
                                                <p class="product-stock">En existencia</p>
                                                <button type="button" class="btn-comprar">Comprar</button>
                                            </div>`
                    productosBuscados.appendChild(productoHTML);
                }
            }
            if(botonFiero.checked){
                if(producto.marca=="Fiero"){
                    const productoHTML=document.createElement('div');
                    productoHTML.innerHTML=`<div class="producto">
                                                <img src="img/productos/${producto.imagen}" alt="" class="product-img">
                                                <a href="producto.html" class="product-name">${producto.nombre}</a>
                                                <p class="product-price">$${producto.precio}</p>
                                                <p class="product-stock">En existencia</p>
                                                <button type="button" class="btn-comprar">Comprar</button>
                                            </div>`
                    productosBuscados.appendChild(productoHTML);
                }
            }
            if(botonVolteck.checked){
                if(producto.marca=="Volteck"){
                    const productoHTML=document.createElement('div');
                    productoHTML.innerHTML=`<div class="producto">
                                                <img src="img/productos/${producto.imagen}" alt="" class="product-img">
                                                <a href="producto.html" class="product-name">${producto.nombre}</a>
                                                <p class="product-price">$${producto.precio}</p>
                                                <p class="product-stock">En existencia</p>
                                                <button type="button" class="btn-comprar">Comprar</button>
                                            </div>`
                    productosBuscados.appendChild(productoHTML);
                }
            }
            if(botonCinsa.checked){
                if(producto.marca=="CINSA"){
                    const productoHTML=document.createElement('div');
                    productoHTML.innerHTML=`<div class="producto">
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

function botonRadioPresionado(){
    precioMinimo.disabled = true;
    precioMaximo.disabled = true;
    precioMinimo.value="--------";
    precioMaximo.value="--------";
}