$(document).ready(function() {

  var boton = $("#boton");
  var caja = $("#caja");

  // $(selector).animate({parametros}, velocidad, callback)

  boton.on("click", function() {
    caja.animate({
      // marginLeft: "20px"
      marginLeft: "+=20px"
    }, 300, function() {
      // alert("Fin de la animación.");
    });

    caja.animate({
      marginLeft: "-=20px"
    }, 300);

    caja.toggleClass("animacion");
  });

});