const addToList = require('../src/esercizio8');

describe('Esercizio 8: Immutabilità', () => {
  test('dovrebbe aggiungere un elemento alla fine di un array', () => {
    const originalArray = [1, 2, 3];
    const newArray = addToList(originalArray, 4);
    
    expect(newArray).toEqual([1, 2, 3, 4]);
  });
  
  test('non dovrebbe modificare l\'array originale', () => {
    const originalArray = [1, 2, 3];
    addToList(originalArray, 4);
    
    // L'array originale dovrebbe rimanere immutato
    expect(originalArray).toEqual([1, 2, 3]);
  });
  
  test('dovrebbe funzionare con un array vuoto', () => {
    expect(addToList([], 'primo')).toEqual(['primo']);
  });
  
  test('dovrebbe funzionare con diversi tipi di dati', () => {
    const arr = ['a', 'b', 'c'];
    expect(addToList(arr, 42)).toEqual(['a', 'b', 'c', 42]);
    expect(addToList(arr, { key: 'value' })).toEqual(['a', 'b', 'c', { key: 'value' }]);
    expect(addToList(arr, [1, 2])).toEqual(['a', 'b', 'c', [1, 2]]);
  });
});
