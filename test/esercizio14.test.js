const zipWith = require('../src/esercizio14');

describe('Esercizio 14: Combinazione di Dati', () => {
  test('dovrebbe applicare una funzione a coppie di elementi da due array', () => {
    const sum = (a, b) => a + b;
    expect(zipWith(sum, [1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]);
    
    const multiply = (a, b) => a * b;
    expect(zipWith(multiply, [1, 2, 3], [4, 5, 6])).toEqual([4, 10, 18]);
  });
  
  test('dovrebbe gestire array di lunghezza diversa', () => {
    const sum = (a, b) => a + b;
    // Se gli array hanno lunghezze diverse, dovrebbe fermarsi al più corto
    expect(zipWith(sum, [1, 2, 3, 4], [5, 6])).toEqual([6, 8]);
    expect(zipWith(sum, [1, 2], [3, 4, 5, 6])).toEqual([4, 6]);
  });
  
  test('dovrebbe restituire un array vuoto se uno degli input è vuoto', () => {
    const sum = (a, b) => a + b;
    expect(zipWith(sum, [], [1, 2, 3])).toEqual([]);
    expect(zipWith(sum, [1, 2, 3], [])).toEqual([]);
    expect(zipWith(sum, [], [])).toEqual([]);
  });
  
  test('dovrebbe funzionare con funzioni diverse', () => {
    // Concatenare stringhe
    const concat = (a, b) => a + b;
    expect(zipWith(concat, ['a', 'b', 'c'], ['x', 'y', 'z'])).toEqual(['ax', 'by', 'cz']);
    
    // Creare oggetti
    const makePair = (a, b) => ({ first: a, second: b });
    expect(zipWith(makePair, [1, 2], ['a', 'b'])).toEqual([
      { first: 1, second: 'a' },
      { first: 2, second: 'b' }
    ]);
  });
});
