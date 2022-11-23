/* LOCAL STORAGE */

// Se comprueba que el navegador soporte Local Storage
if(typeof(Storage) != undefined) {
  // Se establece un nuevo valor
  localStorage.setItem("nombre", "Hector Manuel");
  // localStorage.nombre = "Hector Manuel";
} else {
  document.write("Tu navegador no soporta Local Storage.");
}

// Se llama al nombre guardado en Local Storage
document.write(localStorage.nombre);

// Se elimina un valor de Local Storage
localStorage.removeItem("nombre");

/* ----- ----- ----- ----- ----- ----- ----- */

/* SESSION STORAGE */

sessionStorage.setItem("nombre", "Deisy Jazmin");
// sessionStorage.nombre = "Deisy Jazmin";