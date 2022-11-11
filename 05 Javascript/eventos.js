/*
  Existen 3 modelos de eventos diferentes:
    -> Modelo basico de eventos:
      * Caracteristicas limitadas.
      * Funciona en todos los navegadores.

    -> Modelo de eventos estandar:
      * Se pueden hacer mas cosas con ellos.
      * Todos los navegadores lo soportan.

    -> Modelo de eventos de Internet Explorer:
      * Creado por Microsoft exclusivamente para IE.

  --------------------------------------------------

  Algunos de los tipos de eventos mas usados:
    * click
    * focus
    * blur
    * change
    * onload
    * mouseover
    * mouseout
    * resize
    * submit
*/

///////////////////////////////////////////////////////////////

function crearCaja() {
  var contenedor = document.getElementById('contenedor');
  var caja = document.createElement('div');
  caja.className = 'caja';
  contenedor.appendChild(caja);
}

var btnCaja = document.getElementById('btn-caja');
btnCaja.addEventListener('click', crearCaja);

///////////////////////////////////////////////////////////////

function saludo() {
  alert('Hola');
}

function saludo2() {
  alert('Hola 2');
}

var btnSaludar = document.getElementById('btn-saludar');
btnSaludar.addEventListener('click', saludo);
btnSaludar.addEventListener('click', saludo2);
btnSaludar.addEventListener('click', function() {
  alert('Hola anonimo');
});

btnSaludar.removeEventListener('click', saludo2);