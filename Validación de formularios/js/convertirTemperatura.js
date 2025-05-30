// Ejercicio: Crear un formulario para realizar la conversión de temperatura del ejercicio de la sesión anterior.

/*
Función para convertir temperaturas entre Celsius (°C) y Fahrenheit (°F) según la unidad indicada. 

Datos de prueba:    Temperatura     Escala      Resultado esperado
                    25              F           77
                    32              C           0
                    "100"           C           Error
                    0               a           Error
*/
function convertirTemperatura(temperatura, escala) {
  // Validaciones
  if (typeof temperatura !== "number") {
    return "Error: temperatura debe ser un número";
  }
  if (escala !== "C" && escala !== "F") {
    return "Error: unidad no válida (use 'C' o 'F')";
  }

  // Conversión
  let resultado;
  if (escala === "C") {
    //Opcional: escala.toLowerCase() o escala.toUpperCase()
    resultado = ((temperatura - 32) * 5) / 9; // °F a °C
  } else {
    resultado = (temperatura * 9) / 5 + 32; // °C a °F
  }
  return resultado.toFixed(2);
}
