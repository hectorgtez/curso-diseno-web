$(document).ready(function() {

  var ejecutar = $("#ejecutar");
  var detener = $("#detener");
  var caja = $(".caja");

  ejecutar.on("click", function() {
    caja.animate({
      marginLeft: "500px"
    }, 5000);

    caja.animate({
      marginLeft: "0px"
    }, 5000);
  });

  detener.on("click", function() {
    // selector.stop([limpiarAnimaciones], [saltarAlFinal]);
    caja.stop(true, false);
  });

});