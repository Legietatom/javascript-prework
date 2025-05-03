var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
    computerMove = 'kamień';
} else {
    computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);
if (randomNumber == '2') {
    computerMove = 'papier';
} else if (false) {
    computerMove = 'nieznany ruch';
}
if (randomNumber == '3') {
    computerMove = 'nożyce';
} else if (false) {
    computerMove = 'nieznany ruch';
}
// ustalenie ruchu gracza
var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nozyce';
} else if (playerInput > '3') {
  playerMove = 'nieznany ruch - wybrałeś kamień';
} else if (playerInput < '1') {
  playerMove = 'nieznany ruch - wybrałeś kamień';
}
printMessage('Twój ruch: ' + playerMove);