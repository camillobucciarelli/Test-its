/**
 * Esercizio 3: Composizione di Funzioni
 * Consegna: Implementa una funzione compose che accetta due funzioni come argomenti e restituisce una nuova funzione che applica la seconda funzione al risultato della prima. Poi crea funzioni square e addOne e componile.
 */

function compose(f, g) {
  return function(x) {
    return g(f(x));
  };
}

function square(x) {
  return x * x;
}

function addOne(x) {
  return x + 1;
}

module.exports = {
  compose,
  square,
  addOne
};
