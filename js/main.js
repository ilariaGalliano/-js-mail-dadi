/*
* Es. 1 Mail
*
*/

// chiedere mail all'utente
var mail = prompt('Inserire email')
console.log(mail);

// lista di chi può accedere
var list = ['luca@gmail.com','marco@gmail.com','matteo@gmail.com','anna@gmail.com','lucia@gmail.com','salvatore@gmail.com','alessio@gmail.com','vanessa@gmail.com','adele@gmail.com','sofia@gmail.com','valentina@gmail.com','giovanni@gmail.com']
//console.log(list);

// ciclo
for (var i = 0; i == mail; i++) {
  var item = mail[i]
if (item === list){
  text.innerHTML = 'La tua mail è stata accettata ed è : ' + list;
  console.log(item);
}
else {
  text.innerHTML = 'La tua mail non è stata accettata';
  console.log(item);
}
}

// risultato
var result = document.getElementById('text');
