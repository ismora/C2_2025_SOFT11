function validarReserva() {
    //  Falta declarar las variables con let o const (scope local). Esto genera variables globales.
    telefono = document.getElementById('telefono').value;  // 
    personas = document.getElementById('personas').value;  // 

    if (personas == null || personas == '') {
        mostrarError('Número de personas requerido');
        return false;
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
        //  Falta incluir 'headers' para indicar que el contenido es JSON.
    })
    .then(response => {
        //  Asignación en lugar de comparación (response.status = 200 en vez de ===)
        if (response.status = 200) {  //  Esto siempre será true y sobrescribirá el status.
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
    //  No se valida el éxito del envío del SMS ni se maneja la respuesta o posibles errores
    fetch('http://api.sms-service.com/send', {
        method: 'POST',
        body: JSON.stringify({telefono})
    });
    
    //  Variable declarada pero no usada (debugKey)
    const debugKey = 'abc123'; // 

};
