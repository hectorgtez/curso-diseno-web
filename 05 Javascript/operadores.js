/*
  Tipos de operadores:
    -> Asignacion
    -> Matematicos o aritmeticos
    -> Incremento o decremento
    -> Operadores logicos o de comparacion
      - Negacion
      - AND
      - OR
*/

var nombre;
nombre = 'Hector';

/* Matematicos o aritmeticos */
var numero1 = 10;
var numero2 = 5;
var resultadoSuma = numero1 + numero2;
var resultadoResta = numero1 - numero2;
var resultadoMultiplicacion = numero1 * numero2;
var resultadoDivision = numero1 / numero2;
var resultadoModulo = numero1 % numero2;
document.write(resultadoSuma);
document.write('<br>');
document.write(resultadoResta);
document.write('<br>');
document.write(resultadoMultiplicacion);
document.write('<br>');
document.write(resultadoDivision);
document.write('<br>');
document.write(resultadoModulo);
document.write('<br><br>');

/* Incremento o decremento */
var numero3 = 2;
var resultadoDecremento = numero3--;
var resultadoIncremento = numero3++;
document.write(resultadoDecremento);
document.write('<br>');
document.write(resultadoIncremento);
document.write('<br><br>');

/* Logicos o de comparacion */
/*
  Operadores de comparacion:
    -> ==   Igual a
    -> ===  Igual en valor y tipo
    -> !=   No iguales
    -> !==  No iguales en valor y tipo
    -> >    Mayor que
    -> <    Menor que
    -> >=   Mayor o igual que
    -> >=   Menor o igual que

  Operaciones logicos:
    -> !  Negacion
    -> && AND
    -> || OR
*/
var numero4 = 5;
var numero5 = 10;
var resultadoComparacion = numero4 >= numero5;
document.write(resultadoComparacion);
document.write('<br><br>');