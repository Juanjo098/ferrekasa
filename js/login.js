const login = document.getElementById('login');
const inputs = document.querySelectorAll('#login .login-input');
const password = document.getElementById('password');

// Validación de campos
// ----------------------------------------------------------------

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

const campos = {
    email: false,
    password: false
}

const validarFormulario = (e) =>{
    switch (e.target.name){
        case 'email':
            validarCampo(expresiones.correo, e.target, e.target.name);
            break;
        case 'password':
            if(e.getModifierState('CapsLock'))
            document.querySelector('.mayus').classList.add('mayus-error');
        else
            document.querySelector('.mayus').classList.remove('mayus-error');
            validarCampo(expresiones.password, e.target, e.target.name);
            break;
    }
};

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        
        document.getElementById(`campo-${campo}`).classList.remove('login-campo-incorrecto');
        document.getElementById(`campo-${campo}`).classList.add('login-campo-correcto');
        document.querySelector(`#campo-${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#campo-${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#campo-${campo} .input-error`).classList.remove('input-error-activo');
        campos[campo] = true;
    }
    else{
        document.getElementById(`campo-${campo}`).classList.add('login-campo-incorrecto');
        document.getElementById(`campo-${campo}`).classList.remove('login-campo-correcto');
        document.querySelector(`#campo-${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#campo-${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#campo-${campo} .input-error`).classList.add('input-error-activo');
        campos[campo] = false;
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

login.addEventListener('submit', (e) =>{
    e.preventDefault();

    if(campos.email && campos.password){
        const loginData = {
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value
        }

        if (validarLogin(loginData)){
            location.reload();
        }
        else{
            alert('El correo y/o la contraseña son incorrectos')
        }
        
        // document.querySelectorAll('.login-campo-correcto').forEach((icon) =>{
        //     icon.classList.remove('login-campo-correcto');
        // });
        
        // document.querySelector('.enviar-error').classList.remove('enviar-mostrar');
        // login.reset();
    }
    else{
        document.querySelector('.enviar-error').classList.add('enviar-mostrar');
    }
});

// -----------------------------------------------------------------------
// Validar inicio de sesión

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