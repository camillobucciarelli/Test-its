const { memoize, factorial, memoizedFactorial } = require('../src/esercizio12');

describe('Esercizio 12: Memorizzazione (Memoization)', () => {
  test('memoize dovrebbe memorizzare i risultati delle chiamate precedenti', () => {
    // Creiamo una funzione di test con un contatore per tracciare le chiamate effettive
    let calls = 0;
    const expensiveFunction = (a, b) => {
      calls++;
      return a + b;
    };
    
    const memoizedFunction = memoize(expensiveFunction);
    
    // Prima chiamata, dovrebbe eseguire la funzione
    expect(memoizedFunction(10, 20)).toBe(30);
    expect(calls).toBe(1);
    
    // Seconda chiamata con stessi argomenti, dovrebbe usare il risultato memorizzato
    expect(memoizedFunction(10, 20)).toBe(30);
    expect(calls).toBe(1); // il contatore non dovrebbe aumentare
    
    // Chiamata con argomenti diversi, dovrebbe eseguire la funzione
    expect(memoizedFunction(5, 5)).toBe(10);
    expect(calls).toBe(2);
    
    // Ancora con primi argomenti, dovrebbe usare il risultato memorizzato
    expect(memoizedFunction(10, 20)).toBe(30);
    expect(calls).toBe(2); // il contatore non dovrebbe aumentare
  });

  test('factorial dovrebbe calcolare correttamente il fattoriale', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120); // 5! = 5*4*3*2*1 = 120
    expect(factorial(10)).toBe(3628800); // 10! = 10*9*8*...*1 = 3628800
  });

  test('memoizedFactorial dovrebbe calcolare il fattoriale e memorizzare i risultati', () => {
    // Controlliamo che la prima chiamata sia corretta
    expect(memoizedFactorial(6)).toBe(720); // 6! = 720
    
    // Se abbiamo un memoizedFactorial realmente funzionante, possiamo solo testare che i risultati siano corretti,
    // ma non possiamo facilmente verificare che stia memorizzando (a meno di spyare la funzione factorial)
    expect(memoizedFactorial(6)).toBe(720);
    expect(memoizedFactorial(7)).toBe(5040);
    
    // Testiamo che sia stata implementata correttamente la memoization
    const originalFactorial = jest.spyOn(require('../src/esercizio12'), 'factorial');
    
    // Queste chiamate dovrebbero usare i valori memorizzati
    memoizedFactorial(6);
    expect(originalFactorial).not.toHaveBeenCalled();
    
    // Puliamo lo spy
    originalFactorial.mockRestore();
  });
});
