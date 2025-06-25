/**
 * Esercizio 15: Partial Application
 * Consegna: Crea una funzione partial che permette di applicare parzialmente gli argomenti a una funzione. Poi usala con una funzione greet che accetta un saluto e un nome.
 */

function partial(fn, ...args) {
  return function(...next) {
    return fn(...args, ...next);
  };
}

function greet(saluto, nome) {
  return `${saluto}, ${nome}!`;
}

module.exports = {
  partial,
  greet
};
