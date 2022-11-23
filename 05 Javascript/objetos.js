var hector = {
  nombre: "Hector Manuel",
  edad: 24,
  pais: "Mexico",

  bio: function() {
    return this.nombre + " tiene " + this.edad + " años.";
  }
};

document.write(hector.bio() + "<br><br>");

/* ----- ----- ----- ----- ----- ----- ----- */

function persona(nombre, edad, pais) {
  this.nombre = nombre;
  this.edad = edad;
  this.pais = pais;
  this.bio = function() {
    return this.nombre + " tiene " + this.edad + " años.";
  };
}

var deisy = new persona("Deisy Jazmin", 24, "Mexico");
var humberto = new persona("Humberto Antonio", 24, "Mexico");

document.write(deisy.bio() + "<br>");
document.write(humberto.bio());