/* Estructura de una funcion */
function nombreFuncion(arg1, arg2, argN) {}

/* Ejemplo de una suma sin funcion */
var numero1 = 10;
var numero2 = 5;
var resultado = numero1 + numero2;
document.write(resultado + '<br><br>');

/* Funcion para realizar sumas */
function sumaFunc(numero1, numero2) {
  return numero1 + numero2;
}
document.write(sumaFunc(15, 15) + '<br>');

/* Funcion asignada a una variable */
var sumaVar = function(numero1, numero2) {
  return numero1 + numero2;
}
document.write(sumaVar(15, 50) + '<br>');

/* Funciones autoinvocadas */
(function() {
  alert('Hola mundo')
} ());