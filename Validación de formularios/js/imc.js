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