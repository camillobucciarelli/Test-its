const { compose, square, addOne } = require('../src/esercizio3');

describe('Esercizio 3: Composizione di Funzioni', () => {
  test('compose dovrebbe comporre due funzioni correttamente', () => {
    const squareAndAddOne = compose(square, addOne);
    expect(squareAndAddOne(5)).toBe(26); // (5^2) + 1 = 26
    
    const addOneAndSquare = compose(addOne, square);
    expect(addOneAndSquare(5)).toBe(36); // (5 + 1)^2 = 36
  });
  
  test('square dovrebbe calcolare il quadrato correttamente', () => {
    expect(square(2)).toBe(4);
    expect(square(0)).toBe(0);
    expect(square(-3)).toBe(9);
  });
  
  test('addOne dovrebbe incrementare il numero correttamente', () => {
    expect(addOne(1)).toBe(2);
    expect(addOne(-1)).toBe(0);
    expect(addOne(0)).toBe(1);
  });
});
