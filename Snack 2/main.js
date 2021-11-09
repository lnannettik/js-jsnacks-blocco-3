// CHECH
console.log(`JS OK`);


// JS Snacks 2
// A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.


const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const quadrati = numeri.map((numero) => {
    return numero * numero;
});

console.log(quadrati);