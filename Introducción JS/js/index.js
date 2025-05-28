// Variable: Espacio de memoria en la computadora, en donde un programa almacena un dato que puede o no cambiar durante la ejecución.  

// Forma incorrecta de crear variables.
/*var nombrePerro = "Kaiser";

var nombreGato;
nombreGato = "Rufus"; */

// Forma adecuada de crear variables.
let nombrePerro = "Kaiser";
console.log("Variable: " + nombrePerro);

nombrePerro = "Nevado";
console.log("Variable: " + nombrePerro);


let nombreGato;
nombreGato = "Rufus";
console.log("Variable: " + nombreGato);


//Constante: Valor que no cambia durante la ejecución de un programa. 
const PI = 3.14;
console.log("Constante pi: " + PI);

const NUMERO_MAXIMO_USUARIOS = 100;


// Función: Bloque de código reutilizable que realiza una tarea específica.


/* Crear una función para calcular el IMC con la siguiente fórmula:
IMC = peso / estatura^2
Mostrar en la consola un mensaje que diga "El IMC es: --"
Datos de prueba en kg       m       IMC
                    80      1.7     27.7
                    60      1.8     18.5
*/
function calcularIMC(peso, estatura){
    let imc = peso / Math.pow(estatura, 2)
    console.log("El IMC es: " + imc.toFixed(2));
}

calcularIMC(80, 1.7);
calcularIMC(60, 1.8);

function calcularIMCRetorno(peso, estatura){
    let imc = peso / Math.pow(estatura, 2)
    return imc.toFixed(2);
}

console.log("El IMC es: " + calcularIMCRetorno(80, 1.7));
console.log("El IMC es: " + calcularIMCRetorno(60, 1.8));


/* Crear una función para calcular el área de un rectángulo
Datos de prueba:    base    altura      área
                    5       3           15
                    4                   16 
                            4           16
                    ""      2           Error
                    0       2           Error
*/
function areaRectangulo(base, altura){
    //Asignar altura = base si solo existe un dato de entrada
    if (altura == undefined){ 
        altura = base;
    }
    //Verificar que los datos de entrada son números
    if (typeof base !== "number" || typeof altura !== "number" || base <= 0 || altura <= 0){
        return "Error"
    }
    return base * altura;
}

console.log(areaRectangulo(5,3));
console.log(areaRectangulo(4));
console.log(areaRectangulo("4", 2));
console.log(areaRectangulo(2, 0));


/*
Ejercicio 1: Crear una función para convertir temperaturas entre Celsius y Fahrenheit.

Diseñar una función llamada convertirTemperatura que convierta una temperatura entre grados Celsius (°C) y Fahrenheit (°F) según la unidad solicitada. 

Datos de prueba:    Temperatura     Escala      Resultado esperado
                    25              F           77
                    32              C           0
                    "100"           C           Error
                    0               a           Error
*/

function convertirTemperatura(temperatura, escala){
    //Validar los datos
    if (typeof temperatura !== "number") {
        return "Error: temperatura debe ser un número";
    }
    if (escala !== "C" && escala !== "F") {
        return "Error: unidad no válida (use 'C' o 'F')";
    }
    // Conversión
    let resultado = 0;
    if (escala === "C"){
        resultado = (temperatura - 32) * 5/9; // °F a °C
    } else{
        resultado = (temperatura *9/5) + 32; 
    }
    return resultado;
}

console.log(convertirTemperatura(25, "F"));
console.log(convertirTemperatura(32, "C"));
console.log(convertirTemperatura(32, "A"));
console.log(convertirTemperatura("32", "C"));


/*
Ejercicio 2: Crear una función para verificar si una palabra es un palíndromo.

Diseñar una función llamada esPalindromo que determine si una palabra se lee igual de izquierda a derecha que de derecha a izquierda.

Datos de prueba:    Palabra         Resultado esperado 
                    analina         es palíndromo
                    reconocer       es palíndromo
                    casa            no es palíndromo

Nota: Puede usar split(), reverse(), join() o toLowerCase(), sin embargo, debe investigar su uso.
*/

