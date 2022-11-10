var edad = 18;

if(edad >= 18) {
  document.write('Eres mayor de edad');
} else {
  document.write('Eres menor de edad');
}
document.write('<br><br>')

////////////////////////////////////////////

var pais = 'mexico';

// if(pais == 'mexico') {
//   document.write('Eres mexicano');
// } else if (pais == 'españa') {
//   document.write('Eres español');
// } else {
//   document.write('No sabemos de donde eres');
// }

switch(pais) {
  case 'mexico':
    document.write('Eres mexicano');
    break;
  case 'españa':
    document.write('Eres español');
    break;
  case 'colombia':
    document.write('Eres colombiano');
    break;
  default:
    document.write('No sabemos de donde eres');
    break;
}