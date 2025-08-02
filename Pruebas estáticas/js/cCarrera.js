function validarLibro() {
    isbn = document.getElementById('isbn').value;  // Sin declaración
    titulo = document.getElementById('titulo').value;
    
        if (!isbn || isbn == '') {  
                showMessage('ISBN requerido');  
        return;
    }
    
    if (isbn.length != 10 && isbn.length != 13) {  
        alert('ISBN debe tener 10 o 13 dígitos');
        return;
    }
    
    if (libroExiste(isbn)) {
        alert('Libro ya existe');
        return;
    }
    
    const libro = {
        isbn: isbn,
        titulo: titulo,
        anio: document.getElementById('anio').value,  
        genero: document.getElementById('genero').value,
    };
    
    fetch('/api/libros', {
        method: 'POST',
        body: JSON.stringify(libro)
    })
    .then(response => {
        if (response.status = 201) {  
            mostrarExito('Libro registrado');
        } else {
            
            mostrarError(errorMessage);  
        }
    });
}

const mostrarExito = (msg) => 
    document.getElementById('mensaje').innerHTML = `<div class="success">${msg}</div>`;

function mostrarError(msg) {
    document.getElementById('mensaje').innerHTML = `<div class="error">${msg}</div>`;
}

const generos = [
    'Ficción',
    'Tecnología',   ];