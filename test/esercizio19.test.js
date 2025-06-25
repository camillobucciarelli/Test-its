const { getOrElse, map } = require('../src/esercizio19');

describe('Esercizio 19: Gestione Opzionale', () => {
  test('getOrElse dovrebbe restituire il valore se non è null/undefined', () => {
    expect(getOrElse(5, 10)).toBe(5);
    expect(getOrElse('hello', 'default')).toBe('hello');
    expect(getOrElse(0, 10)).toBe(0); // 0 è un valore valido, non null o undefined
    expect(getOrElse(false, true)).toBe(false); // false è un valore valido, non null o undefined
  });

  test('getOrElse dovrebbe restituire il valore di default se il valore è null/undefined', () => {
    expect(getOrElse(null, 10)).toBe(10);
    expect(getOrElse(undefined, 'default')).toBe('default');
  });

  test('map dovrebbe applicare la funzione al valore se non è null/undefined', () => {
    const double = x => x * 2;
    expect(map(5, double)).toBe(10);
    
    const toUpper = s => s.toUpperCase();
    expect(map('hello', toUpper)).toBe('HELLO');
    
    // Dovrebbe funzionare anche con 0 e false che sono valori validi
    expect(map(0, double)).toBe(0);
    expect(map(false, x => !x)).toBe(true);
  });

  test('map dovrebbe restituire undefined se il valore è null/undefined', () => {
    const double = x => x * 2;
    expect(map(null, double)).toBe(undefined);
    expect(map(undefined, double)).toBe(undefined);
  });

  test('map e getOrElse possono essere utilizzate insieme per trasformazioni sicure', () => {
    const toUpper = s => s.toUpperCase();
    
    // Se il valore è presente, viene trasformato
    const result1 = getOrElse(map('hello', toUpper), 'DEFAULT');
    expect(result1).toBe('HELLO');
    
    // Se il valore è null/undefined, map restituirà undefined e getOrElse il valore di default
    const result2 = getOrElse(map(null, toUpper), 'DEFAULT');
    expect(result2).toBe('DEFAULT');
  });
});
