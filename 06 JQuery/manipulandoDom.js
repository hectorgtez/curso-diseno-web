$(document).ready(function() {

  var nombre = $("#nombre");
  var titulo = $("#titulo");
  var parrafo = $("#parrafo");
  var enlace = $("#enlace");

  // titulo.text("Encabezado modificado");
  titulo.html("<u>Encabezado modificado HTML</u>");

  nombre.on("change", function() {
    titulo.html("<u>"+nombre.val()+"</u>");
  });

  // enlace.text("Enlace");
  // enlace.attr("href", "#");
  enlace.attr({
    "class": "azul",
    "target": "_blank"
  });

});