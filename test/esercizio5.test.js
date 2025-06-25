const calculateTax = require('../src/esercizio5');

describe('Esercizio 5: Funzioni Pure', () => {
  test('dovrebbe calcolare correttamente il prezzo con tasse', () => {
    expect(calculateTax(100, 10)).toBe(110);
    expect(calculateTax(200, 22)).toBe(244);
    expect(calculateTax(0, 10)).toBe(0);
    expect(calculateTax(100, 0)).toBe(100);
  });
  
  test('dovrebbe essere una funzione pura senza modificare gli input', () => {
    const price = 100;
    const taxPercent = 20;
    calculateTax(price, taxPercent);
    
    // Gli input originali non dovrebbero essere modificati
    expect(price).toBe(100);
    expect(taxPercent).toBe(20);
  });
});
