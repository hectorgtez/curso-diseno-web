var fecha = new Date();

function mostrarTiempo() {
  var fecha = new Date();
  var parrafo = document.getElementById("fecha");
  parrafo.innerHTML = fecha;
}

var intervalo = setInterval(mostrarTiempo, 1000);

document.write(fecha.getHours() + " Horas<br>");
document.write(fecha.getMinutes() + " Minutos<br>");
document.write(fecha.getSeconds() + " Segundos<br><br>");

var semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

document.write("Día: " + semana[fecha.getDay()] + "<br>");
document.write("Mes: " + fecha.getMonth() + "<br>");
document.write("Año: " + fecha.getFullYear() + "<br>");