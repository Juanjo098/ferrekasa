// ----------------------------------------------------------------
// Declaración de variables y constantes

// Inputs que controlan la validación de login
const login = document.getElementById('login');
const inputs = document.querySelectorAll('#login .login-input');
const password = document.getElementById('password');

// Objeto que contiene las expreciones regulares necesarias para validar la información de los inputs
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    cPostal: /^[0-9]{5}$/,
    calle: /^[a-zA-Z0-9À-ÿ\s]{1,40}$/,
    numero: /^[0-9]{1,5}$/
}

// Objeto que contiene dos variables que determinan si el "email" y el "password" cumplen con las condiciones establecidas
const campos = {
    email: false,
    password: false
}

// ----------------------------------------------------------------
// Carga de eventos

cargarEventListeners();

// Función que carga los cargarEventListeners
function cargarEventListeners(){
    // Eventos de los inpust
    inputs.forEach((input) => {
        input.addEventListener('keyup', e => validarFormulario(e));
        input.addEventListener('blur', e => validarFormulario(e));
    });
    login.addEventListener('submit', (e) => formEvent(e))
    // Evento del formulario
}

// ----------------------------------------------------------------
// Declaración de funciones

// Función que se encargar de validar el formulario
function validarFormulario (e){
    // Switch que determina qué input lanzó el evento
    switch (e.target.name){
        case 'email':
            validarCampo(expresiones.correo, e.target, e.target.name);
            break;
        case 'password':
            // If que determina si las mayusculas están activadas
            if(e.getModifierState('CapsLock'))
                // Se una advertencia
                document.querySelector('.mayus').classList.add('mayus-error');
            else
                // Se remueve la advertencia
                document.querySelector('.mayus').classList.remove('mayus-error');
            validarCampo(expresiones.password, e.target, e.target.name);
            break;
    }
};

// Función que se encarga de validar el campo
// Parámetros:
// exprecion: contiene la expresión regular con la que se va a hacer la comparación
// input: contenido del input
// campo: nombre del input que lanzó el evento
const validarCampo = (expresion, input, campo) =>{
    // If que compara la cadena almacenada en "input" contra la expresión regular almacenada en "expresion"
    if(expresion.test(input.value)){
        // Se añade a elementos del HTML corresoindientes al input que lanzó el evento clases que lo resaltan, indicándole al usuario que está correcto
        document.getElementById(`campo-${campo}`).classList.remove('login-campo-incorrecto');
        document.getElementById(`campo-${campo}`).classList.add('login-campo-correcto');
        document.querySelector(`#campo-${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#campo-${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#campo-${campo} .input-error`).classList.remove('input-error-activo');
        // Se define que el campo está correcto
        campos[campo] = true;
    }
    else{
        // Se añade a los elementos del HTML corresoindientes al input que lanzó el evento clases que lo resalta, indicándole al usuario que tiene un error
        document.getElementById(`campo-${campo}`).classList.add('login-campo-incorrecto');
        document.getElementById(`campo-${campo}`).classList.remove('login-campo-correcto');
        document.querySelector(`#campo-${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#campo-${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#campo-${campo} .input-error`).classList.add('input-error-activo');
                // Se define que el campo está incorrecto
        campos[campo] = false;
    }
};

// Funsión que determina que el email y el password correspoden a un registro ya existente
function validarLogin(loginData) {
    // Se cargan los registros ya existentes
    const dataBase = JSON.parse(localStorage.getItem('registros')) || [];
    // Se busca el índice de un  regsitro cuyo email y password coincidan
    const index = dataBase.findIndex((data) => data.email == loginData.email && data.password == loginData.password);
    // Si la constante "index" es distianta de -1, significa que se encontró un registro que coinside
    if (index != -1){
        // Se añade al localStorage la información del usuario que ingreso
        localStorage.setItem('login', JSON.stringify(dataBase[index]));
        return true;
    }
    // Si la constante "index" es igual de -1, significa que no se encontró un registro que coinside
    else
        return false;
}

// Función que carga el evento del formulario
function formEvent(e){
    // Se previene el evento "submit"
    e.preventDefault();
    // Se determina si el email y el password son correctos
    if(campos.email && campos.password){
        // Se crea un objeto que guardar el email y el password
        const loginData = {
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value
        }
        // Se determnia si el email y el password correspoden a un registo de la base de datos
        if (validarLogin(loginData))
            // Se recarga la página
            location.href = 'index.html';
        else
            // Se presenta un mensaje de error
            alert('El correo y/o la contraseña son incorrectos');
    }
    else{
        document.querySelector('.enviar-error').classList.add('enviar-mostrar');
    }
}