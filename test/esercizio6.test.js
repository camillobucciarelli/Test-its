const { createMultiplier, double, triple } = require('../src/esercizio6');

describe('Esercizio 6: Funzioni di Ordine Superiore', () => {
  test('createMultiplier dovrebbe creare una funzione che moltiplica per un numero specifico', () => {
    const multiplyByFive = createMultiplier(5);
    expect(multiplyByFive(10)).toBe(50);
    expect(multiplyByFive(0)).toBe(0);
    expect(multiplyByFive(-2)).toBe(-10);
  });
  
  test('double dovrebbe moltiplicare un numero per 2', () => {
    expect(double(5)).toBe(10);
    expect(double(0)).toBe(0);
    expect(double(-3)).toBe(-6);
  });
  
  test('triple dovrebbe moltiplicare un numero per 3', () => {
    expect(triple(5)).toBe(15);
    expect(triple(0)).toBe(0);
    expect(triple(-3)).toBe(-9);
  });
});
