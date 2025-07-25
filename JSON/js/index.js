let personas;
let divPersonas = document.getElementById("divPersona");

//Función para cargar el JSON
async function cargarJSON(){
    const respuesta = await fetch("js/personas.json")
    personas = await respuesta.json();

    for(let i = 0; i < personas.length; i++){
        divPersonas.innerText += personas[i].nombre + "\n";
    } 
}

// Llamada a la función
cargarJSON();