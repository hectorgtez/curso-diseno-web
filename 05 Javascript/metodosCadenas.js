// Length
var nombre = 'Hector Manuel';
var numeroCaracteres = nombre.length;
document.write(nombre + ' tiene ' + numeroCaracteres + ' caracteres <br>');

// Substring
var segundoNombre = nombre.substring(7, 13);
document.write(segundoNombre + '<br>');

// Substr
var segundoNombre2 = nombre.substr(7, 5);
document.write(segundoNombre2 + '<br>');

// Replace
var nuevoNombre = nombre.replace('Manuel', 'Zeferino')
document.write(nuevoNombre + '<br>');

// Uppercase
var nombreMayus = nombre.toUpperCase();
document.write(nombreMayus + '<br>');

// Lowercase
var nombreMinus = nombre.toLowerCase();
document.write(nombreMinus + '<br>');

// IndexOf
var posicion = nombre.indexOf('e');
document.write(posicion + '<br>');

// LastIndexOf
var posicion = nombre.lastIndexOf('e');
document.write(posicion + '<br>');