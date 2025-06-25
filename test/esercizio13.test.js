const deepMap = require('../src/esercizio13');

describe('Esercizio 13: Map Ricorsivo', () => {
  test('dovrebbe trasformare valori in un array semplice', () => {
    const double = x => x * 2;
    expect(deepMap([1, 2, 3], double)).toEqual([2, 4, 6]);
  });
  
  test('dovrebbe trasformare valori in array annidati', () => {
    const double = x => x * 2;
    expect(deepMap([1, [2, 3], 4], double)).toEqual([2, [4, 6], 8]);
    expect(deepMap([1, [2, [3, 4], 5], 6], double)).toEqual([2, [4, [6, 8], 10], 12]);
  });
  
  test('dovrebbe gestire array vuoti e array con array vuoti', () => {
    const double = x => x * 2;
    expect(deepMap([], double)).toEqual([]);
    expect(deepMap([[]], double)).toEqual([[]]);
    expect(deepMap([1, []], double)).toEqual([2, []]);
  });
  
  test('dovrebbe funzionare con funzioni di trasformazione diverse', () => {
    // Funzione che converte numeri in stringhe
    const toString = x => String(x);
    expect(deepMap([1, [2, 3], 4], toString)).toEqual(['1', ['2', '3'], '4']);
    
    // Funzione che eleva al quadrato
    const square = x => x * x;
    expect(deepMap([1, [2, [3]], 4], square)).toEqual([1, [4, [9]], 16]);
  });
});
