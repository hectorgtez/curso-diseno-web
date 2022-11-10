/* Las variables pueden ser de 2 tipos: Global y Local */

/* --- --- VARIABLE LOCAL --- --- */
// Las variables locales son las que han sido creadas dentro de una
// funcion o una funcion anidada (una funcion dentro de otra)
function saludo() {
  var texto = 'Hola mundo!';
  document.write(texto + '<br>');
}
saludo();

/* Variable local con funciones anidadas */
function saludo2() {
  var texto2 = 'Hola mundo anidado!';

  function mensaje() {
    document.write(texto2 + '<br>')
  }
  mensaje();
}
saludo2();

/* --- --- VARIABLE GLOBAL --- --- */
// Las variables globales pueden ser accedidas desde cualquier parte del
// codigo, incluyendo cualquier funcion+
var texto3 = 'Hola mundo 3!';
function saludo3() {
  document.write(texto3 + '<br>');
  texto3 = 'Hola mundo, modificado!';
  document.write(texto3 + '<br>');
}
saludo3();

/* --- --- IMPORTANTE --- --- */
// Si una variable se declara fuera es global. Pero las variables dentro de una funcion
// pueden ser globales tambien. Si dentro de una funcion se declara una variable mediante
// la palabra "var" sera local, pero si no se le pone "var" sera global
function saludo4() {
  mensaje = 'Hola mundo 4!';
}
saludo4();
document.write(mensaje + '<br>');

/* --- --- PROTEGER VARIABLES DE CODIGO DE TERCEROS --- --- */
(function() {
  var mensaje2 = 'Hola mundo 5!';
} ());