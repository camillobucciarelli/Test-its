const { groupBy, sumBy, maxBy, filterBy } = require('../src/esercizio20');

describe('Esercizio 20: Analisi Funzionale di Dati', () => {
  // Creiamo un insieme di dati di test che simulano transazioni finanziarie
  const transactions = [
    { id: 1, amount: 100, category: 'groceries', date: '2025-01-15' },
    { id: 2, amount: 50, category: 'entertainment', date: '2025-01-16' },
    { id: 3, amount: 200, category: 'groceries', date: '2025-01-20' },
    { id: 4, amount: 75, category: 'utilities', date: '2025-01-22' },
    { id: 5, amount: 150, category: 'entertainment', date: '2025-01-25' }
  ];

  test('groupBy dovrebbe raggruppare gli elementi per una chiave estratta', () => {
    // Raggruppiamo le transazioni per categoria
    const grouped = groupBy(transactions, item => item.category);
    
    expect(Object.keys(grouped)).toEqual(['groceries', 'entertainment', 'utilities']);
    expect(grouped.groceries).toHaveLength(2);
    expect(grouped.entertainment).toHaveLength(2);
    expect(grouped.utilities).toHaveLength(1);
    
    // Verifichiamo che gli elementi siano raggruppati correttamente
    expect(grouped.groceries.map(t => t.id)).toEqual([1, 3]);
    expect(grouped.entertainment.map(t => t.id)).toEqual([2, 5]);
  });

  test('sumBy dovrebbe sommare i valori estratti dagli elementi', () => {
    // Calcoliamo la somma degli importi di tutte le transazioni
    const totalAmount = sumBy(transactions, item => item.amount);
    expect(totalAmount).toBe(575); // 100 + 50 + 200 + 75 + 150
    
    // Calcoliamo la somma delle lunghezze delle categorie
    const totalCategoryLength = sumBy(transactions, item => item.category.length);
    expect(totalCategoryLength).toBe(44); // 'groceries' (9) + 'entertainment' (13) + 'groceries' (9) + 'utilities' (9) + 'entertainment' (13)
  });

  test('maxBy dovrebbe trovare l\'elemento con il valore massimo', () => {
    // Troviamo la transazione con l'importo più alto
    const highestTransaction = maxBy(transactions, item => item.amount);
    expect(highestTransaction.id).toBe(3); // La transazione con amount = 200
    
    // Troviamo la transazione con la categoria più lunga (in caso di parità, prende il primo)
    const longestCategory = maxBy(transactions, item => item.category.length);
    expect(longestCategory.category).toBe('entertainment');
  });

  test('maxBy dovrebbe gestire array vuoti', () => {
    expect(maxBy([], item => item.amount)).toBe(undefined);
  });

  test('filterBy dovrebbe filtrare gli elementi in base a un predicato', () => {
    // Filtriamo le transazioni con importo > 100
    const expensive = filterBy(transactions, item => item.amount > 100);
    expect(expensive).toHaveLength(2);
    expect(expensive.map(t => t.id)).toEqual([3, 5]);
    
    // Filtriamo le transazioni della categoria 'groceries'
    const groceries = filterBy(transactions, item => item.category === 'groceries');
    expect(groceries).toHaveLength(2);
    expect(groceries.map(t => t.id)).toEqual([1, 3]);
  });

  test('le funzioni possono essere composte per analisi complesse', () => {
    // Analisi: somma degli importi per categoria
    const byCategory = groupBy(transactions, item => item.category);
    
    const groceriesTotal = sumBy(byCategory.groceries, item => item.amount);
    expect(groceriesTotal).toBe(300); // 100 + 200
    
    const entertainmentTotal = sumBy(byCategory.entertainment, item => item.amount);
    expect(entertainmentTotal).toBe(200); // 50 + 150
    
    // Analisi: transazione con importo massimo per categoria
    const highestGroceries = maxBy(byCategory.groceries, item => item.amount);
    expect(highestGroceries.id).toBe(3); // 200
    
    // Analisi: filtra e poi trova il massimo
    const expensiveTransactions = filterBy(transactions, item => item.amount > 100);
    const mostExpensive = maxBy(expensiveTransactions, item => item.amount);
    expect(mostExpensive.id).toBe(3); // 200
  });
});
