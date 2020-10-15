/*
* Es. 1 Mail
*
*/
/*
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

risultato
var result = document.getElementById('text');
*/

/*
* Es. 2 Gioco dei dadi
*
*/

/*2. Gioco dei dadi
Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

//Generare un numero random da 1  a 6, sia per il giocatore sia per il computer

//Giocatore
var numberUser = parseInt( prompt('inserisci un numero random da 1 a 6 '));
console.log(numberUser);
//Utente
var numberComputer = Math.floor(Math.random() * 6) + 1;;
console.log(numberComputer);

if (numberUser > numberComputer){
  text.innerHTML = 'Ha vinto l\'utente';
  console.log('Hai vinto');
}
else {
  text.innerHTML = 'Ha vinto il computer';
  console.log('Hai perso');
}

var result = document.getElementById('text');
