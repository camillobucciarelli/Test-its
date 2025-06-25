const sumArray = require('../src/esercizio4');

describe('Esercizio 4: Riduzione di Dati', () => {
  test('dovrebbe sommare correttamente gli elementi dell\'array', () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
    expect(sumArray([])).toBe(0);
    expect(sumArray([0])).toBe(0);
    expect(sumArray([-1, 1])).toBe(0);
    expect(sumArray([-5, -3, -1])).toBe(-9);
  });

  // Verifica che sia usata la funzione reduce
  test('dovrebbe utilizzare la funzione reduce()', () => {
    const reduceSpy = jest.spyOn(Array.prototype, 'reduce');
    sumArray([1, 2, 3]);
    expect(reduceSpy).toHaveBeenCalled();
    reduceSpy.mockRestore();
  });
});
