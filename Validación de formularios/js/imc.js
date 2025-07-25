let txtPeso = document.getElementById("txtPeso");
let txtEstatura = document.querySelector("#txtEstatura");

let btnCalcularIMC = document.querySelector("#btnCalcularIMC");

let parrafoResultado = document.querySelector("#sctResultado p");


/* Función para calcular el IMC con la fórmula: IMC = peso / estatura^2
Datos de prueba en kg       m       IMC
                    80      1.7     27.7
                    60      1.8     18.5
*/
function calcularIMC() {
    let peso = txtPeso.value;
    let estatura = txtEstatura.value;
    if (validarCamposVacios() === false) {
        let imc = peso / Math.pow(estatura, 2);
        parrafoResultado.innerText = imc.toFixed(2);
    } else {
        Swal.fire({
            icon: "warning",
            title: "No se puede calcular el IMC",
            text: "Por favor complete los campos resaltados."
        });
    }
}

function validarCamposVacios() {
    let error = false; //No hay errores
    if (txtPeso.value === "") {
        txtPeso.classList.add("input-error");
        error = true;
    } else {
        txtPeso.classList.remove("input-error");
    }

    if (txtEstatura.value === "") {
        txtEstatura.classList.add("input-error");
        error = true;
    } else {
        txtEstatura.classList.remove("input-error");
    }
    return error;
}

btnCalcularIMC.addEventListener("click", calcularIMC);

//Ejercicio: Crear un formulario que permita ingresar el nombre,usuario, contraseña, verificación de la contraseña, fecha de nacimiento, género. Cuando el usuario se registrar se deben validar todos los campos y asegurar que la contraseña coincide con la verificación.   

/*
[new]: se ha creado un método o recurso en el programa que no existía antes del commit
[improved]: se mejoró la forma en que se hacía un método o como se mostraba algo. No es un problema como tal.
[fixed]: se corrigió un problema, algo que estaba mal.
[updated]: se reemplazó un recurso o código por otro realizado por alguien más (ejemplo: una prueba para la ventana de inicio de sesión).
[init]: commit especial que indica el inicio del repositorio.
[incomplete]: commit especial que indica que se ha respaldado una versión inestable o incompleta de la funcionalidad. Se recomienda usarlo como una forma de indicar un respaldo temporal del trabajo hacia una versión estable de la funcionalidad que se está programando, pero que se tiene que dejar por un momento. 

*/