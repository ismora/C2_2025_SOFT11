
let txtPeso = document.getElementById("txtPeso"); //Por ID
let txtEstatura = document.querySelector("#txtEstatura"); // Por Selector

//Variable para el Botón
let btnCalcularIMC = document.querySelector("#btnCalcularIMC");

//Variable para resultado, que busca una seccion de tipo párrafo
let parrafoResultado = document.querySelector("#sctResultado p");

function calcularIMC() {
    let peso = txtPeso.value;
    let estatura = txtEstatura.value;

    if (hayCamposVacios() === false) {
        let imc = peso / Math.pow(estatura, 2);
        console.log("El IMC es: ", imc.toFixed(2));
        parrafoResultado.innerText = imc.toFixed(2);
    } else {
        //Libreria para mostrar un modal de advertencia
        Swal.fire({
            icon: "warning",
            title: "No se puede calcular",
            text: "Complete los campos resaltados"
        });
    }
}

//Comprobar errores, los campos no pueden estar vacios
function hayCamposVacios(){
    let error = false; //Inicia en False porque no hay errores
    if (txtPeso.value === ""){
        txtPeso.classList.add("input-error"); //Agregar clase
        error = true;
    } else {
        txtPeso.classList.remove("input-error") //Quitar la clase
    }

    if (txtEstatura.value === ""){
        txtEstatura.classList.add("input-error")
        error = true;
    } else {
        txtEstatura.classList.remove("input-error")
    }
    return error;
}

//Listener de eventos al hacer click
btnCalcularIMC.addEventListener("click", calcularIMC)