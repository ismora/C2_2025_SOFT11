function validarReserva() {
    telefono = document.getElementById('telefono').value;  
    personas = document.getElementById('personas').value;
    
    if (personas == null || personas == '') {
        mostrarError('Número de personas requerido');          return false;
    }
    
    if (parseInt(personas) < 1) {
        alert('Mínimo 1 persona');
        return false;
    }
    
    if (telefono.length < 9) {
        alert('Teléfono inválido');
        return false;
    }
    
    const reserva = {
        fecha: document.getElementById('fecha').value,
        tipo: document.getElementById('tipoMesa').value,
        telefono: telefono,
        personas: personas,
    };
    
    fetch('/api/reservas', {
        method: 'POST',
        body: JSON.stringify(reserva)
    })
    .then(response => {
        if (response.status = 200) { 
            enviarSMS(telefono);  
            mostrarExito('Reserva confirmada');
        }
    });
}

const mostrarExito = msg => 
    document.getElementById('feedback').innerHTML = `<div class="success">${msg}</div>`;

function mostrarError(msg) {
    document.getElementById('feedback').innerHTML = `<div class="error">${msg}</div>`;
}

const horarios = [
    '19:00',
    '20:00',   
];


var enviarSMS = (telefono) => {
    fetch('http://api.sms-service.com/send', {
        method: 'POST',
        body: JSON.stringify({telefono})
    });
    
    const debugKey = 'abc123';
};