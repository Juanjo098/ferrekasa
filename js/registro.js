const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario .formulario-input');


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
    telefono: false,
    password: false,
    nombre: false,
    apellido: false,
    calle: false,
    numero: false,
    colonia: false,
    cPostal: false,
    ciudad: false,
    estado: false,
}

const resetear = () =>{
    campos['email'] = false;
    campos['telefono'] = false;
    campos['password'] = false;
    campos['nombre'] = false;
    campos['apellido'] = false;
    campos['calle'] = false;
    campos['numero'] = false;
    campos['colonia'] = false;
    campos['cPostal'] = false;
    campos['ciudad'] = false;
    campos['estado'] = false;
};

const validarFormulario = (e) =>{
    switch (e.target.name){
        case 'email':
            validarCampo(expresiones.correo, e.target, e.target.name);
            break;
        case 'telefono':
            validarCampo(expresiones.telefono, e.target, e.target.name);
            break;
        case 'password':
            if(e.getModifierState('CapsLock'))
                document.querySelector('.mayus').classList.add('mayus-error');
            else
                document.querySelector('.mayus').classList.remove('mayus-error');
            validarCampo(expresiones.password, e.target, e.target.name);
            validarContraseña();
            break;
        case 'confirm-password':
            validarContraseña();
            break;
        case 'nombre':
            validarCampo(expresiones.nombre, e.target, e.target.name);
            break;
        case 'apellido':
            validarCampo(expresiones.nombre, e.target, e.target.name);
            break;
        case 'calle':
            validarCampo(expresiones.calle, e.target, e.target.name);
            break;
        case 'numero':
            validarCampo(expresiones.numero, e.target, e.target.name);
            break;
        case 'colonia':
            validarCampo(expresiones.nombre, e.target, e.target.name);
            break;
        case 'cPostal':
            validarCampo(expresiones.cPostal, e.target, e.target.name);
            break;
        case 'ciudad':
            validarCampo(expresiones.nombre, e.target, e.target.name);
            break;
        case 'estado':
            validarCampo(expresiones.nombre, e.target, e.target.name);
            break;
    }
};

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        
        document.getElementById(`campo-${campo}`).classList.remove('formulario-campo-incorrecto');
        document.getElementById(`campo-${campo}`).classList.add('formulario-campo-correcto');
        document.querySelector(`#campo-${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#campo-${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#campo-${campo} .input-error`).classList.remove('input-error-activo');
        campos[campo] = true;
    }
    else{
        document.getElementById(`campo-${campo}`).classList.add('formulario-campo-incorrecto');
        document.getElementById(`campo-${campo}`).classList.remove('formulario-campo-correcto');
        document.querySelector(`#campo-${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#campo-${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#campo-${campo} .input-error`).classList.add('input-error-activo');
        campos[campo] = false;
    }
};

const validarContraseña = () =>{
    const password = document.getElementById('password');
    const password2 = document.getElementById('confirm-password');

    if (password.value == password2.value){
        document.getElementById(`campo-confirm-password`).classList.remove('formulario-campo-incorrecto');
        document.getElementById(`campo-confirm-password`).classList.add('formulario-campo-correcto');
        document.querySelector(`#campo-confirm-password i`).classList.remove('fa-times-circle');
        document.querySelector(`#campo-confirm-password i`).classList.add('fa-check-circle');
        document.querySelector(`#campo-confirm-password .input-error`).classList.remove('input-error-activo');
        campos['password'] = true;
    }
    else{
        document.getElementById(`campo-confirm-password`).classList.add('formulario-campo-incorrecto');
        document.getElementById(`campo-confirm-password`).classList.remove('formulario-campo-correcto');
        document.querySelector(`#campo-confirm-password i`).classList.add('fa-times-circle');
        document.querySelector(`#campo-confirm-password i`).classList.remove('fa-check-circle');
        document.querySelector(`#campo-confirm-password .input-error`).classList.add('input-error-activo');
        campos['password'] = false;
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();

    if(campos.email && campos.telefono && campos.password && campos.nombre && campos.apellido && campos.calle && campos.numero && campos.colonia && campos.cPostal && campos.ciudad && campos.estado){
        
        const registerData = {
            email: document.querySelector('#email').value,
            telefono: document.querySelector('#telefono').value,
            password: document.querySelector('#password').value,
            nombre: document.querySelector('#nombre').value,
            apellido: document.querySelector('#apellido').value,
            calle: document.querySelector('#calle').value,
            numero: document.querySelector('#numero').value,
            colonia: document.querySelector('#colonia').value,
            cPostal: document.querySelector('#cPostal').value,
            ciudad: document.querySelector('#ciudad').value,
            estado: document.querySelector('#estado').value,
        }

        // Se valida que el correo no exista dentro de la base de datos
        if (validarRegistro(registerData)){
            // Se resetan los valores booleanos que determina si los campos fueron llenados adecuadamente
            resetear();
            // Se limpian los campos del formulario de registro
            formulario.reset();
            // Se eliminan los íconos que indican que un campo fue llenado correctamente
            document.querySelectorAll('.formulario-campo-correcto').forEach((icon) =>{
                icon.classList.remove('formulario-campo-correcto');
            });
            // Se muestra un mensaje que indica que el registro se completó con éxito
            document.querySelector('.enviar-correcto').classList.add('enviar-mostrar');
            // Se remueve el mensaje de error
            document.querySelector('.enviar-error').classList.remove('enviar-mostrar');
            // Pasados cinco segundos se remueve el mensaje de éxito
            setTimeout(() => {
                document.querySelector('.enviar-correcto').classList.remove('enviar-mostrar');
            }, 5000);
        }
        else
            alert('El correo que introdujo ya fue registrado. Inténtelo con otro.');
    }
    else{
        document.querySelector('.enviar-error').classList.add('enviar-mostrar');
    }
});

// ----------------------------------------------------------------------------------------------
// Validación del registro

function validarRegistro(registerData) {
    // Se cargan los registros ya existentes
    let dataBase = JSON.parse(localStorage.getItem('registros')) || [];
    // Se define si el correo ya está insertado
    const existe = dataBase.some((registro) => registro.email === registerData.email);
    // If que valida que el correo no se haya registrado todavía
    if (!existe){
        // Se añade a los registros ya existentes el registro que se acaba de hacer
        dataBase = [...dataBase, registerData];
        localStorage.setItem('registros', JSON.stringify(dataBase));
        return true;
    }
    else
        return false;
}