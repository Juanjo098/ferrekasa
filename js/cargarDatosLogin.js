// Arreglo que almacena las etiquetas "a" encargadas de dirigir a los usuarios a la página de inicio de sesión o registro
const loginNSingin = document.querySelectorAll('.dark-bar-right a');

// Cargar addEventListeners
cargarEventListeners();

// Función que se encarga de añadir los addEventListeners
function cargarEventListeners() {
    // Se carga la información de login
    document.addEventListener('load', cargarLogin());
    // Se previene que el usuario acceda al a la página de inicio de sesión si ya está logeado
    loginNSingin[0].addEventListener('click', (e) =>{
        if (loginNSingin[0].textContent != "Iniciar sesión")
            e.preventDefault();
    });
    // Se elimina la información del login
    loginNSingin[1].addEventListener('click', (e) =>{
        // Se determina si se inició sesión en base al texto presentado en "loginNSingin[1]"
        if (loginNSingin[1].textContent == `Cerrar sesión`){
            // Se previene que la etiqueta "a" redirecione a otra página
            e.preventDefault();
            // Se elimina la información del login
            localStorage.removeItem('login');
            // Se actualiza la página
            location.reload();
        }
    });
}

// Función encargada de cargar los datos de login
function cargarLogin() {
    const loginData = JSON.parse(localStorage.getItem('login')) || null;
    // Si existe información de login, se llama a la siguiente función
    if (loginData != null)
        modificarInformacion(loginData);
}

// Función que se encarga de reamplacar el contenido de las etiquetas "a" que contienen "iniciar sesión" y "registrarse"
function modificarInformacion(loginData){
    loginNSingin[0].textContent = `${loginData.nombre} ${loginData.apellido}`
    loginNSingin[1].textContent = `Cerrar sesión`
}