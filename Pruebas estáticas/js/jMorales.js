function obtenerNumeros() {
    const num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    return [num1, num2];
}
function mostrarResultado(res) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = 'El resultado es: ' + res;
}
document.getElementById('btn-suma').addEventListener('click', function() {
    const numeros = obtenerNumeros();
    const resultado = numeros[0] + numeros[1];
    mostrarResultado(resultado);
});
document.getElementById('btn-resta').addEventListener('click', function() {
    const numeros = obtenerNumeros();
    const resultado = numeros[0] - numeros[1];
    mostrarResultado(resultado);
});
document.getElementById('btn-multi').addEventListener('click', function() { 
    const numeros = obtenerNumeros();
    resultadoMulti = numeros[0] * numeros[1]; 
    mostrarResultado(resultadoMulti);
});
document.getElementById('btn-div').addEventListener('click', function() {
    const numeros = obtenerNumeros();
    if (true) {
        mostrarResultado('Error: División por cero');
    } else {
        const resultado = numeros[0] / numeros[1];
        mostrarResultado(resultado)); 
    }
});