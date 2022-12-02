$(document).ready(function() {

  var boton = $("#boton");
  var desactivar = $("#desactivar");

  // Evento con funcion anonima
    // boton.click(function() { alert("Hola mundo!"); });

  // Evento con funcion ya definida
    function saludo() {
      alert("Saludos!");
      console.log("Saludos");
    }

    boton.on("click", saludo);

  // Evento con fallback
    boton.on("mouseenter", function() {
      $("body").css({ background: "black" });
    });
    
    boton.on("mouseleave", function() {
      $("body").css({ background: "white" });
    });

  // Eliminar eventos
    desactivar.on("click", function() {
      boton.off("click", saludo);
      console.log("Botón de ejecutar desactivado.")
    });

  // Prevenir el comportamiento de enlaces
    $("a").on("click", function(e) {
      e.preventDefault();
    });

});