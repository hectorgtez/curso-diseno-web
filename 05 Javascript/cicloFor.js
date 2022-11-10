/* Ciclo del 1 a 10 */
for (var i=0; i<10; i++) {
  document.write(i+1 + ' ');
}
document.write('<br><br>');

/* Ciclo del 10 a 1 */
for (var i=10; i>0; i--) {
  document.write(i + ' ');
}
document.write('<br><br>');

/* Ciclo para recorrer un arreglo mediante for */
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
             'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

for (var i=0; i<meses.length; i++) {
  document.write(i+1 + '.' + meses[i] + ' ');
}
document.write('<br>');

//////////////////////////

for (mes in meses) {
  document.write(meses[mes] + ' ');
}