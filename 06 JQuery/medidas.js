$(document).ready(function() {

  var titulo = $("#titulo");
  var info = $("#info");

  // Calcula el ancho del elemento
  info.append("Ancho del elemento: " + titulo.width() + "<br>");
  
  // Calcula el ancho del elemento + el padding
  info.append("Ancho + padding: " + titulo.innerWidth() + "<br>");

  // Calcula el ancho del elemento + el pading + el borde
  info.append("Ancho + padding + borde: " + titulo.outerWidth() + "<br>");
  
  // Calcula el ancho del elemento + el pading + el borde + el margin
  info.append("Ancho + padding + borde + margin: " + titulo.outerWidth(true) + "<br><br>");

  // ----------------------------------------------------------------------------- //

  // Calcula el alto del elemento
  info.append("Alto del elemento: " + titulo.height() + "<br>");
  
  // Calcula el alto del elemento + el padding
  info.append("Alto + padding: " + titulo.innerHeight() + "<br>");

  // Calcula el alto del elemento + el pading + el borde
  info.append("Alto + padding + borde: " + titulo.outerHeight() + "<br>");
  
  // Calcula el alto del elemento + el pading + el borde + el margin
  info.append("Alto + padding + borde + margin: " + titulo.outerHeight(true));

});