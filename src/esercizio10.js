/**
 * Esercizio 10: Elaborazione di Stringhe
 * Consegna: Crea una serie di funzioni componibili per l'elaborazione di stringhe: removeSpaces, toUpperCase, reverse, e concatenate. Poi combinale per trasformare una stringa in diversi modi.
 */

function removeSpaces(str) {
  return str.replace(/\s+/g, '');
}

function toUpperCase(str) {
  return str.toUpperCase();
}

function reverse(str) {
  return str.split('').reverse().join('');
}

function concatenate(...strings) {
  return strings.join('');
}

function compose(...functions) {
  return function (initialValue) {
    return functions.reduceRight((accumulator, currentFunction) => {
      return currentFunction(accumulator);
    }, initialValue);
  };
}

module.exports = {
  removeSpaces,
  toUpperCase,
  reverse,
  concatenate,
  compose
};
