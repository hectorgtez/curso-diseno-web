var amigos = ['Deisy', 'Humberto', 'Kevin', 'Paula'];

for (amigo in amigos) {
  if(amigos[amigo] == 'Deisy') {
    continue;
  }

  document.write(amigos[amigo] + '<br>');

  if(amigos[amigo] == 'Kevin') {
    break;
  }
}