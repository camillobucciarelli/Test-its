const { removeSpaces, toUpperCase, reverse, concatenate, compose } = require('../src/esercizio10');

describe('Esercizio 10: Elaborazione di Stringhe', () => {
  test('removeSpaces dovrebbe rimuovere tutti gli spazi da una stringa', () => {
    expect(removeSpaces('hello world')).toBe('helloworld');
    expect(removeSpaces('  spazi  ovunque  ')).toBe('spaziovunque');
    expect(removeSpaces('')).toBe('');
  });

  test('toUpperCase dovrebbe convertire una stringa in maiuscolo', () => {
    expect(toUpperCase('hello')).toBe('HELLO');
    expect(toUpperCase('Hello World')).toBe('HELLO WORLD');
    expect(toUpperCase('')).toBe('');
  });

  test('reverse dovrebbe invertire l\'ordine dei caratteri in una stringa', () => {
    expect(reverse('hello')).toBe('olleh');
    expect(reverse('abcd')).toBe('dcba');
    expect(reverse('')).toBe('');
  });

  test('concatenate dovrebbe concatenare una stringa alla fine di un\'altra', () => {
    const addExclamation = concatenate('!');
    expect(addExclamation('hello')).toBe('hello!');
    
    const addWorld = concatenate(' world');
    expect(addWorld('hello')).toBe('hello world');
  });

  test('compose dovrebbe comporre correttamente le funzioni di elaborazione stringhe', () => {
    // Creiamo una composizione che: rimuove spazi, converte in maiuscolo, inverte
    const processString = compose(removeSpaces, toUpperCase, reverse);
    
    expect(processString('hello world')).toBe('DLROWOLLEH');
    
    // Testiamo un'altra composizione: rimuove spazi, aggiunge suffisso
    const removeSpacesAndExclaim = compose(removeSpaces, concatenate('!'));
    expect(removeSpacesAndExclaim('hello world')).toBe('helloworld!');
  });
});
