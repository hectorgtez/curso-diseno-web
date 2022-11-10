/* --- Maneras de acceder a elementos del DOM --- */
var cajasEtq = document.getElementsByTagName('div');
var cajasClass = document.getElementsByClassName('caja');
var cajaId = document.getElementById('primeraCaja')

// cajaId.textContent = 'Hola mundo!';
// cajaId.innerHTML = '<u>Hola mundo!</u>';

/* --- --- CREANDO NODOS --- --- */
// 1. Crear el elemento
var caja = document.createElement('div');
// 2. Crear un nodo de texto
var contenido = document.createTextNode('Nodo creado con JS');
// 3. Añadir el nodo de texto al elemento
caja.appendChild(contenido);
// 4. Agregar atributos a la caja
caja.setAttribute('class', 'caja naranja');
// 5. Agregar elemento al documento
var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);

// Modificar la clase o id de un elemento
caja.id = 'primera';
caja.className = 'caja naranja';

// Conocer el elemento padre de un elemento
var padre = cajasEtq[0].parentNode;

// Insertar un elemento en una posicion especifica
padre.insertBefore(caja, cajasEtq[0]);

// Reemplazar un elemento por otro
padre.replaceChild(caja, cajasEtq[1]);

// Borrar un elemento
padre.removeChild(cajasEtq[3]);