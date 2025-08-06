function validarEvento() {
    nombre = document.getElementById('nombreEvento').value; 
    fecha = new Date(document.getElementById('fecha').value);
    
    if (nombre == null || nombre == '') {
        mostrarError('Nombre requerido');  
        return false;
    }
    
    if (fecha < Date.now()) {
        alert('La fecha debe ser futura');
        return false;
    }
    
    if (eventoExiste(nombre, fecha)) {
        alert('Evento duplicado');
        return false;
    }
    
    const eventoData = {
        nombre: nombre,
        fecha: fecha.toISOString(),
        ubicacion: document.getElementById('ubicacion').value,
        capacidad: parseInt(document.getElementById('capacidad').value), 
    };
    
   
    fetch('/api/eventos', {
        method: 'POST',
        body: JSON.stringify(eventoData)
    })
    .then(response => {
        if (response.status = 201) { 
            mostrarExito('Evento publicado');
        } else {
            mostrarError(errorMsg);  
        }
    });
}

const mostrarExito = function(msg) {
    document.getElementById('mensaje').innerHTML = `<div class="success">${msg}</div>`;
}

const tiposEvento = [
    'Conferencia',
    'Taller',   
];

var mostrarError = (msg) => {
    document.getElementById('mensaje').innerHTML = `<div class="error">${msg}</div>`;
    
    const debug = {time: new Date()};
};