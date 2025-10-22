// script.js

// Función para manejar el envío del formulario de contacto
function enviarFormularioContacto(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Guardar datos en localStorage
    localStorage.setItem('contacto', JSON.stringify({ nombre, email, mensaje }));

    // Mostrar mensaje de éxito
    alert('Formulario de contacto enviado con éxito.');
}

// Función para manejar el registro de usuario
function registrarUsuario(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Guardar datos en localStorage
    localStorage.setItem('usuario', JSON.stringify({ username, password }));

    // Mostrar mensaje de éxito
    alert('Registro de usuario exitoso.');
}

// Asignar funciones a los eventos de envío de formularios
document.getElementById('formContacto').addEventListener('submit', enviarFormularioContacto);
document.getElementById('formRegistro').addEventListener('submit', registrarUsuario);