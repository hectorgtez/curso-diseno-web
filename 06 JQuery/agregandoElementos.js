$(document).ready(function() {

  var boton = $("#agregar");
  var contenedor = $("#contenedor");
  var contador = 1;

  boton.on("click", function() {
    var caja = $("<div></div>").attr("class", "caja").text(contador);
    contador++;

    contenedor.append(caja);
    // contenedor.prepend(caja);

    // contenedor.before(caja);
    // contenedor.after(caja);
  });
  
});