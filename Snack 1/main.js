// CHECH
console.log(`JS OK`);


// 1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
// - Codice giocatore
// - Nome
// - Cognome
// - Età
// - Media punti fatti per partita
// - Percentuale di successo per tiri da 3 punti


const player = {
    playerCode: 'A1B2C3',
    nome: 'Luca',
    cognome: 'Nannetti',
    age: 34,
    mediaXgame: getRandomInteger(0, 50),
    score3ptXcent: getRandomInteger(0, 100)
};

console.table(player)


// 2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
// - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
// - la media punti fatti per partita deve essere compresa tra 0 e 50
// - la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100


// 3
const {nome, cognome, age, playerCode} = player;
console.log(`il giocatore ${nome} ${cognome} ha ${age}anni e il suo codice giocatore è ${playerCode}`);





// const code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J', 'K','L', 'M', 'N', 'O', 'P', 'Q','R', 'S', 'T', 'U', 'V', 'W','X', 'Y', 'Z'];
// console.log(code);

// var newCode = '';
// console.log(newCode)

for (let i = 0; i < 6; i++) {
    newCode += code[getRandomNumber()]; 
    console.log(newCode);     
}


function genPlayerCode() {
    const chars = 'ABCDEFGHILMNOPQRSTUVZ'

    let codeChars = '';
    let codeNumbers = '';

    for (let i = 0; i < 6; i++) {


}







// ***************************
// Function
// ***************************

// function getRandomNumber() {
//     return Math.floor(Math.random() * code.length);
// }


function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};