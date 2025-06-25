const { all, any } = require('../src/esercizio17');

describe('Esercizio 17: Predicati Combinati', () => {
  test('all dovrebbe restituire true solo se tutti i predicati sono soddisfatti', () => {
    // Alcuni predicati di esempio
    const isPositive = x => x > 0;
    const isEven = x => x % 2 === 0;
    const isLessThan10 = x => x < 10;
    
    // Combiniamo i predicati
    const isPositiveEvenAndLessThan10 = all([isPositive, isEven, isLessThan10]);
    
    expect(isPositiveEvenAndLessThan10(6)).toBe(true);  // soddisfa tutti
    expect(isPositiveEvenAndLessThan10(-2)).toBe(false); // non è positivo
    expect(isPositiveEvenAndLessThan10(3)).toBe(false);  // non è pari
    expect(isPositiveEvenAndLessThan10(12)).toBe(false); // non è meno di 10
  });

  test('all dovrebbe restituire true per un array vuoto di predicati', () => {
    // Edge case: se non ci sono predicati, all dovrebbe restituire true per qualsiasi valore
    const emptyAll = all([]);
    expect(emptyAll(42)).toBe(true);
    expect(emptyAll(null)).toBe(true);
  });

  test('any dovrebbe restituire true se almeno un predicato è soddisfatto', () => {
    // Alcuni predicati di esempio
    const isPositive = x => x > 0;
    const isEven = x => x % 2 === 0;
    const isGreaterThan10 = x => x > 10;
    
    // Combiniamo i predicati
    const isPositiveOrEvenOrGreaterThan10 = any([isPositive, isEven, isGreaterThan10]);
    
    expect(isPositiveOrEvenOrGreaterThan10(12)).toBe(true);  // soddisfa tutti
    expect(isPositiveOrEvenOrGreaterThan10(-2)).toBe(true);  // soddisfa isEven
    expect(isPositiveOrEvenOrGreaterThan10(7)).toBe(true);   // soddisfa isPositive
    expect(isPositiveOrEvenOrGreaterThan10(-11)).toBe(false); // non soddisfa nessuno
  });

  test('any dovrebbe restituire false per un array vuoto di predicati', () => {
    // Edge case: se non ci sono predicati, any dovrebbe restituire false per qualsiasi valore
    const emptyAny = any([]);
    expect(emptyAny(42)).toBe(false);
    expect(emptyAny(null)).toBe(false);
  });

  test('all e any dovrebbero funzionare con diversi tipi di dati', () => {
    const isString = x => typeof x === 'string';
    const isEmpty = x => x.length === 0;
    
    const isEmptyString = all([isString, isEmpty]);
    expect(isEmptyString('')).toBe(true);
    expect(isEmptyString('hello')).toBe(false);
    expect(isEmptyString([])).toBe(false);
    
    const isStringOrEmpty = any([isString, isEmpty]);
    expect(isStringOrEmpty('')).toBe(true);
    expect(isStringOrEmpty('hello')).toBe(true);
    expect(isStringOrEmpty([])).toBe(true);
    expect(isStringOrEmpty(42)).toBe(false);
  });
});
