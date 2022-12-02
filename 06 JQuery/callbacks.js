$(document).ready(function() {

  var btnEjecutar = $("#ejecutar");
  var caja = $(".caja");

  btnEjecutar.on("click", function() {
    caja.slideUp(300, function() {
      $(this).slideDown(300);
    });
  });

});