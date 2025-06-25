const mapObject = require('../src/esercizio16');

describe('Esercizio 16: Trasformazione di Oggetti', () => {
  test('dovrebbe trasformare i valori di un oggetto mantenendo le stesse chiavi', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const double = x => x * 2;
    
    expect(mapObject(obj, double)).toEqual({ a: 2, b: 4, c: 6 });
  });

  test('dovrebbe funzionare con oggetti vuoti', () => {
    expect(mapObject({}, x => x * 2)).toEqual({});
  });

  test('dovrebbe gestire valori di diversi tipi', () => {
    const obj = {
      name: 'John',
      age: 30,
      active: true
    };
    
    // Trasforma tutti i valori in stringhe
    const toString = x => String(x);
    expect(mapObject(obj, toString)).toEqual({
      name: 'John', // rimane uguale
      age: '30',    // convertito in stringa
      active: 'true' // convertito in stringa
    });
  });

  test('la funzione di trasformazione dovrebbe ricevere sia il valore che la chiave', () => {
    const obj = { a: 1, b: 2, c: 3 };
    
    // Una funzione che utilizza sia il valore che la chiave
    const transform = (value, key) => `${key}:${value}`;
    
    expect(mapObject(obj, transform)).toEqual({
      a: 'a:1',
      b: 'b:2',
      c: 'c:3'
    });
  });

  test('non dovrebbe modificare l\'oggetto originale', () => {
    const original = { a: 1, b: 2, c: 3 };
    const originalCopy = { ...original };
    
    mapObject(original, x => x * 2);
    
    // L'oggetto originale dovrebbe rimanere immutato
    expect(original).toEqual(originalCopy);
  });
});
