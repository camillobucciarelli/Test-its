const doubleNumbers = require('../src/esercizio1');

describe('Esercizio 1: Trasformazione di Dati', () => {
  test('dovrebbe raddoppiare ogni numero in un array', () => {
    expect(doubleNumbers([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
    expect(doubleNumbers([])).toEqual([]);
    expect(doubleNumbers([-1, 0, 5])).toEqual([-2, 0, 10]);
  });
  
  // Verifica che sia usata la funzione map
  test('dovrebbe utilizzare la funzione map()', () => {
    const mapSpy = jest.spyOn(Array.prototype, 'map');
    doubleNumbers([1, 2, 3]);
    expect(mapSpy).toHaveBeenCalled();
    mapSpy.mockRestore();
  });
});
