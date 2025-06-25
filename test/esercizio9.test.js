const { curry, add, curriedAdd } = require('../src/esercizio9');

describe('Esercizio 9: Currying', () => {
  test('curry dovrebbe convertire una funzione multi-argomento in una sequenza di funzioni a singolo argomento', () => {
    // Definiamo una funzione di test che accetta tre argomenti
    function multiply(a, b, c) {
      return a * b * c;
    }
    
    const curriedMultiply = curry(multiply);
    
    // Verifichiamo diverse combinazioni di chiamata
    expect(curriedMultiply(2, 3, 4)).toBe(24); // tutti gli argomenti insieme
    expect(curriedMultiply(2)(3, 4)).toBe(24); // primo separato, poi gli altri due
    expect(curriedMultiply(2, 3)(4)).toBe(24); // primi due insieme, ultimo separato
    expect(curriedMultiply(2)(3)(4)).toBe(24); // tutti separati
  });

  test('la funzione add dovrebbe sommare tre numeri', () => {
    expect(add(1, 2, 3)).toBe(6);
    expect(add(10, 20, 30)).toBe(60);
  });

  test('curriedAdd dovrebbe essere una versione curried di add', () => {
    expect(curriedAdd(1, 2, 3)).toBe(6); // tutti gli argomenti insieme
    expect(curriedAdd(1)(2, 3)).toBe(6); // primo separato, poi gli altri due
    expect(curriedAdd(1, 2)(3)).toBe(6); // primi due insieme, ultimo separato
    expect(curriedAdd(1)(2)(3)).toBe(6); // tutti separati
  });
});
