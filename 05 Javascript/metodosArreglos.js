var arreglo = ['Hector', 'Deisy', 'Humberto', 'Kevin', 'Paula'];

/* Metodo length */
document.write(arreglo.length);
document.write('<br><br>')

/* Metodo join */
document.write(arreglo.join('-'));
document.write('<br><br>')

/* Metodo pop y push */
document.write(arreglo.pop());
document.write('<br>')

document.write(arreglo);
document.write('<br>')

arreglo.push('Paula');
document.write(arreglo);
document.write('<br><br>')

/* Metodo shift y unshift */
document.write(arreglo.shift());
document.write('<br>')

document.write(arreglo);
document.write('<br>')

arreglo.unshift('Hector');
document.write(arreglo);
document.write('<br><br>')

/* Metodo concat */
var amigos = ['Adrian', 'Miguel'];
document.write(arreglo.concat(amigos));
document.write('<br><br>')

/* Metodo sort y reverse */
document.write(arreglo.sort());
document.write('<br>')
document.write(arreglo.reverse());