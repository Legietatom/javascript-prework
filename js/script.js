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