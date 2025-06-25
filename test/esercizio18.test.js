const transform = require('../src/esercizio18');

describe('Esercizio 18: Trasformazione Sequenziale', () => {
  test('dovrebbe applicare sequenzialmente le funzioni di trasformazione al valore iniziale', () => {
    // Funzioni di trasformazione
    const addTwo = x => x + 2;
    const multiplyByThree = x => x * 3;
    const subtractOne = x => x - 1;
    
    // Applicazione sequenziale: (5 + 2) * 3 - 1 = 20
    expect(transform(5, [addTwo, multiplyByThree, subtractOne])).toBe(20);
  });
  
  test('dovrebbe restituire il valore iniziale se non ci sono trasformazioni', () => {
    expect(transform(10, [])).toBe(10);
  });
  
  test('dovrebbe funzionare con una singola trasformazione', () => {
    const double = x => x * 2;
    expect(transform(5, [double])).toBe(10);
  });
  
  test('dovrebbe funzionare con diversi tipi di dati', () => {
    // Trasformazioni di stringhe
    const appendExclamation = s => s + '!';
    const toUpperCase = s => s.toUpperCase();
    
    expect(transform('hello', [appendExclamation, toUpperCase])).toBe('HELLO!');
    
    // Trasformazioni di array
    const addElement = arr => [...arr, 'new'];
    const reverse = arr => [...arr].reverse();
    
    expect(transform(['a', 'b', 'c'], [addElement, reverse])).toEqual(['new', 'c', 'b', 'a']);
    
    // Trasformazioni di oggetti
    const addProperty = obj => ({ ...obj, added: true });
    const removeProperty = obj => {
      const { unwanted, ...rest } = obj;
      return rest;
    };
    
    expect(transform({ name: 'test', unwanted: 'value' }, [addProperty, removeProperty]))
      .toEqual({ name: 'test', added: true });
  });
});
