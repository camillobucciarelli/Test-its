/**
 * Esercizio 6: Funzioni di Ordine Superiore
 * Consegna: Scrivi una funzione createMultiplier che accetta un numero e restituisce una nuova funzione che moltiplica il suo argomento per quel numero. Poi usa questa funzione per creare funzioni specifiche come double e triple.
 */

function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

module.exports = {
  createMultiplier,
  double,
  triple
};
