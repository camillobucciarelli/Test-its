const { partial, greet } = require('../src/esercizio15');

describe('Esercizio 15: Partial Application', () => {
  test('partial dovrebbe permettere di applicare parzialmente gli argomenti a una funzione', () => {
    // Funzione di test che somma tre numeri
    const add = (a, b, c) => a + b + c;
    
    // Applichiamo parzialmente un argomento
    const add5 = partial(add, 5);
    expect(add5(10, 20)).toBe(35); // 5 + 10 + 20
    
    // Applichiamo parzialmente due argomenti
    const add5and10 = partial(add, 5, 10);
    expect(add5and10(20)).toBe(35); // 5 + 10 + 20
  });

  test('greet dovrebbe creare un messaggio di saluto', () => {
    expect(greet('Ciao', 'Marco')).toBe('Ciao, Marco!');
    expect(greet('Buongiorno', 'Professoressa')).toBe('Buongiorno, Professoressa!');
  });

  test('partial dovrebbe funzionare con la funzione greet', () => {
    // Creiamo saluti con un prefisso fisso
    const sayHello = partial(greet, 'Ciao');
    expect(sayHello('Marco')).toBe('Ciao, Marco!');
    expect(sayHello('Giulia')).toBe('Ciao, Giulia!');
    
    const sayGoodMorning = partial(greet, 'Buongiorno');
    expect(sayGoodMorning('Professore')).toBe('Buongiorno, Professore!');
  });
  
  test('partial dovrebbe preservare il contesto di this', () => {
    // Funzione che usa this
    function multiply(factor) {
      return this.value * factor;
    }
    
    // Oggetto con un metodo partially applied
    const obj = {
      value: 5,
      doubleValue: partial(multiply, 2)
    };
    
    // Se partial preserva correttamente this, dovrebbe funzionare
    expect(obj.doubleValue()).toBe(10);
  });
});
