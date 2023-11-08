// Esercizio 1:

// Sulla base della lezione di Lunedi, ricreare la funzione calcolatrice utilizzando le callbacks.
// Fate in modo che possa calcolare le quattro operazioni base matematiche
// ( + - * /) e che prenda non due ma tre valori numerici sui quali eseguire queste operazioni.
// In questo caso, potete aiutarvi con il codice della lezione.

// funzione

const sum = (first, second, third) => first + second + third;

const sub = (first, second, third) => first - second - third;

const mult = (first, second, third) => first * second * third;

const div = (first, second, third) => first / second / third;

// richiamo la funzione callbacks senza parentesi tonde:

function calculator(calc) {
  return calc;
}

console.log(calculator(sum(7, 4, 2)));
console.log(calculator(sub(7, 4, 2)));
console.log(calculator(mult(7, 4, 2)));
console.log(calculator(div(7, 4, 2)));

// End Esercizio #1

//  Esercizio #2
// Creare un array di oggetti che simuli la lista del carrello di un e-commerce.
// Ogni oggetto deve avere al suo interno almeno un id, un nome, una indirizzo per immagine,
//  e una descrizione. Processate il seguente array di oggetti con map e forEach, e scriverne
//  in commento la differenza. Basta solo stamparne il contenuto.

// Array di oggetti:

const items = [
  {
    id: 34534,
    name: "MacbookPro",
    color: "Black",
    model: "Pro M2",
    description: "Macbook Pro, M2, Macintosh HD",
  },

  {
    id: 2345,
    name: "MacbookAir",
    colour: "black",
    model: "Air 2",
    description: "Macbook Air, M1, Macintosh HD",
  },

  {
    id: 324232,
    name: "MagicMouse",
    colour: "White",
    model: "13pro",

    description: "MagicMouse, Bluethoot, con caricatore",
  },

  {
    id: 342352,
    name: "Iphone13",
    colour: "Red",
    model: 13,
    description: "Iphone13, memoria 250gb",
  },
];

// funzione forEach, con console log all'interno:
// stampa ogni articolo all'interno dell'Array:

items.forEach((items) => console.log(items));

// Funzione map  - Ha obbligo come funzionalità quella di tornare un array con la stessa dimesione dell'array di'ingresso

let itemWithMap = items.map((item) => {
  return item.name;
});

console.log(itemWithMap);

// End Secondo Sercizio

// Terzo Esercizio

// 2 Array:

const firstArray = [2, 4, 6, 8, 10];

const secondArray = [10, 20, 30, 40, 50];

// Funzione che moltiplica e aggiunge

const transformAndFilter = (first, second) => {
  const multFirstArray = first.map((number) => number * 2);
  const addFive = second.map((number) => number + 5);
  console.log(multFirstArray, addFive);
};

transformAndFilter(firstArray, secondArray);


