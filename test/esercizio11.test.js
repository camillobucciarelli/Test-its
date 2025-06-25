const safeDivide = require('../src/esercizio11');

describe('Esercizio 11: Gestione Errori Funzionale', () => {
  test('dovrebbe dividere correttamente due numeri', () => {
    expect(safeDivide(10, 2)).toBe(5);
    expect(safeDivide(15, 3)).toBe(5);
    expect(safeDivide(0, 5)).toBe(0);
  });

  test('dovrebbe gestire la divisione per zero restituendo un valore predefinito', () => {
    expect(safeDivide(10, 0)).toBe(0); // valore predefinito 0
    expect(safeDivide(20, 0, 'Errore')).toBe('Errore'); // valore predefinito personalizzato
  });

  test('dovrebbe accettare un valore predefinito personalizzato', () => {
    expect(safeDivide(10, 0, Infinity)).toBe(Infinity);
    expect(safeDivide(10, 0, null)).toBe(null);
  });
});
