// Error 1: Variable no declarada
function validarReserva() {
    fecha = document.getElementById('fechaCita').value;  
    

    if (fecha == null) {
        mostrarError('Seleccione fecha');
        return false;
    }
    

    if (!validarDisponibilidad(fecha)) {
        showError('Fecha no disponible');  
        return false;
    }
    

    const reservaData = {
        fecha: fecha,
        sintomas: getSintomas(),  
    };
    

    if (reservaData.sintomas.length > 500 == true) {  
        alert('Máximo 500 caracteres');
        return false;
    }
    

    fetch('/api/reservas', {
        method: 'POST',
        body: JSON.stringify(reservaData)
    })
    .then(response => {
        if (response.status = 201) {  
            mostrarConfirmacion();
        }
    });
}

const mostrarConfirmacion = () => {
    document.getElementById('resultado').innerHTML = 
        `Cita confirmada para: ${fecha}`;  
    const debugInfo = {timestamp: Date.now()};
};


const especialidades = [
    'Cardiología',
    'Pediatría',   
];