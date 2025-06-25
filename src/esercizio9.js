/**
 * Esercizio 9: Currying
 * Consegna: Implementa una funzione curry che converte una funzione che accetta più argomenti in una sequenza di funzioni che accettano un singolo argomento. Poi applica il currying a una funzione add che somma tre numeri.
 */

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...args2) {
        return curried(...args, ...args2);
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

module.exports = {
  curry,
  add,
  curriedAdd
};
