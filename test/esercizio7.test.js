const pipeline = require('../src/esercizio7');

describe('Esercizio 7: Pipeline di Funzioni', () => {
  test('dovrebbe applicare funzioni in sequenza', () => {
    // Definiamo alcune funzioni di esempio
    const addTwo = x => x + 2;
    const multiplyByThree = x => x * 3;
    const divideByFour = x => x / 4;
    
    // Creiamo una pipeline con queste funzioni
    const compute = pipeline(addTwo, multiplyByThree, divideByFour);
    
    // (5 + 2) * 3 / 4 = 5.25
    expect(compute(5)).toBe(5.25);
  });
  
  test('dovrebbe funzionare con una singola funzione', () => {
    const addFive = x => x + 5;
    const compute = pipeline(addFive);
    expect(compute(10)).toBe(15);
  });
  
  test('dovrebbe funzionare con funzioni che non operano su numeri', () => {
    const appendA = str => str + 'A';
    const appendB = str => str + 'B';
    const appendC = str => str + 'C';
    
    const appendABC = pipeline(appendA, appendB, appendC);
    expect(appendABC('X')).toBe('XABC');
  });
});
