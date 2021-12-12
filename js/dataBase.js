// Arreglo que contiene la información de los productos
cargarDataBase();

function cargarDataBase() {
    if (JSON.parse(localStorage.getItem('dataBase')) == null) {
        const productos =[
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
                nombre: "Portalámparas con sensor de movimiento " /* (cadena) */,
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
            },
            {
                id: 31/* (entero) */,
                nombre: "Desarmador" /* (cadena) */,
                imagen: "pro30.jpeg",
                precio: 315,
                marca: "Truper" /* (cadena) */,
                categoria: "Taladros" /* (cadena) */,
                existencia: 10 /* (entero) todos con el mismo número de existencias */
            }
        ];
        let categorias = []
        productos.forEach((producto) => {
            if (categorias.length == 0)
                categorias = [...categorias, producto.categoria]
            else{
                if(!categorias.some((p) => p == producto.categoria))
                    categorias = [...categorias, producto.categoria]
            }
        });
        let marcas = [];
        productos.forEach(producto => {
            if (marcas.length == 0)
                marcas = [...marcas, producto.marca]
            else{
                if(!marcas.some((p) => p == producto.marca))
                    marcas = [...marcas, producto.marca]
            }
        });
        localStorage.setItem('dataBase', JSON.stringify(productos))
        localStorage.setItem('categorias', JSON.stringify(categorias))
        localStorage.setItem('marcas', JSON.stringify(marcas))
    }
}