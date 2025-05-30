let txtPeso = document.getElementById("txtPeso");
let txtEstatura = document.querySelector("#txtEstatura");

let btnCalcularIMC = document.querySelector("#btnCalcularIMC");

let parrafoResultado = document.querySelector("#sctResultado p");

/* Función para calcular el IMC con la fórmula: IMC = peso / estatura^2
Datos de prueba en kg       m       IMC
                    80      1.7     27.7
                    60      1.8     18.5
*/
//Inicio de la función calcularIMC
function calcularIMC() {
  // Función para calcular el IMC
  let peso = txtPeso.value;
  let estatura = txtEstatura.value;
  if (validarCamposVacios() === false) {
    let imc = peso / Math.pow(estatura, 2);
    parrafoResultado.innerText = imc.toFixed(2);
  } else {
    Swal.fire({
      // Usando SweetAlert2 para mostrar un mensaje de error
      icon: "warning", // Icono de advertencia
      title: "No se pudo calcular el IMC", // Título del mensaje
      text: "Por favor complete los espacios resaltados en rojo.", // Texto del mensaje
    });
  }
}
// Fin de la función calcularIMC
/*****************************************/
//Inicio de la función validarCamposVacios
function validarCamposVacios() {
  // Validar que los campos no estén vacíos
  let error = false;
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

// Fin de la función validarCamposVacios

btnCalcularIMC.addEventListener("click", calcularIMC); //Colocar abajo de la función para que no falle
