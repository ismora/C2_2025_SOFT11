const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (event) {
    // Limpiar mensajes anteriores
    document.querySelectorAll('span[id^="error-"]').forEach(span => span.textContent = '');

    let valido = true;

    // Validar nombre
    const nombre = document.getElementById('nombre');
    if (nombre.value.trim() === '') {
    document.getElementById('error-nombre').textContent = 'Por favor, ingrese su nombre.';
    valido = false;
    }

    // Validar email
    const email = document.getElementById('email');
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (email.value.trim() === '') {
    document.getElementById('error-email').textContent = 'El correo electrónico es obligatorio.';
    valido = false;
    } else if (!emailRegex.test(email.value)) {
    document.getElementById('error-email').textContent = 'Formato de correo incorrecto. Ejemplo: usuario@correo.com';
    valido = false;
    }

    // Validar teléfono
    const telefono = document.getElementById('telefono');
    if (telefono.value.trim() !== '' && !telefono.checkValidity()) {
    document.getElementById('error-telefono').textContent = 'Ingrese un número válido (8-15 dígitos).';
    valido = false;
    }

    if (!valido) {
    event.preventDefault(); // Evita el envío si hay errores
    }
});