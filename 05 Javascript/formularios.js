var formulario = document.getElementById('formulario');
var nombre = formulario.nombre;
var sexo = formulario.sexo;
var terminos = formulario.terminos;

function validar(e) {
  // Validacion de nombre
  if(nombre.value > 18) {
    alert('Maximo de caracteres permitidos'); 
  } else if(nombre.value == '') {
    alert('Por favor ingresa un nombre'); 
  }

  // Validacion de sexo
  if(!sexo[0].checked && !sexo[1].checked) {
    alert('Por favor ingresa un sexo');
  }

  // Validacion de terminos y condiciones
  if(!terminos.checked) {
    alert('Por favor acepta los terminos y condiciones');
  }

  // Evita que se envie el fomulario
  e.preventDefault();
}

formulario.addEventListener('submit', validar);