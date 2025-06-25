const filterEven = require('../src/esercizio2');

describe('Esercizio 2: Filtraggio Funzionale', () => {
  test('dovrebbe filtrare solo i numeri pari', () => {
    expect(filterEven([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(filterEven([1, 3, 5])).toEqual([]);
    expect(filterEven([2, 4, 6])).toEqual([2, 4, 6]);
    expect(filterEven([])).toEqual([]);
  });

  test('dovrebbe gestire array con numeri negativi e zero', () => {
    expect(filterEven([-2, -1, 0, 1, 2])).toEqual([-2, 0, 2]);
  });

  // Verifica che sia usata la funzione filter
  test('dovrebbe utilizzare la funzione filter()', () => {
    const filterSpy = jest.spyOn(Array.prototype, 'filter');
    filterEven([1, 2, 3]);
    expect(filterSpy).toHaveBeenCalled();
    filterSpy.mockRestore();
  });
});
