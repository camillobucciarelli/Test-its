/**
 * Esercizio 17: Predicati Combinati
 * Consegna: Crea funzioni all e any che accettano un array di predicati (funzioni che restituiscono valori booleani) e restituiscono una nuova funzione che verifica se tutti o almeno uno dei predicati sono soddisfatti per un dato input.
 */

function all(predicates) {
  return function(input) {
    return predicates.every(function(predicate) {
      return predicate(input);
    });
  };
}

function any(predicates) {
  return function(input) {
    return predicates.some(function(predicate) {
      return predicate(input);
    });
  };
}

module.exports = {
  all,
  any
};
