
/* Función para calcular el IMC con la fórmula: IMC = peso / estatura^2
Datos de prueba en kg       m       IMC
                    80      1.7     27.7
                    60      1.8     18.5
*/

function calcularIMC(peso, estatura) {
    let imc = peso / Math.pow(estatura, 2);
    console.log("El IMC es: ", imc);
}
