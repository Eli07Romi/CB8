// // Esercizio #1

// Sulla base della lezione del giorno, creare un timer al cui scadere di 3 secondi
// e mezzo chieda all'utente se è maggiorenne con un popup.
// Il popup è solo testuale, nessun altro elemento

// NON  dinamico

const popupLegalAgeEl = () => {
  const wrapperEl = document.createElement("div");
  const textEl = document.createElement("p");
  const textElyes = document.createElement("p");

  wrapperEl.className = "popup-legal";
  textEl.textContent = "Welcome, Are you of Legal Age?";

  wrapperEl.append(textEl);
  return wrapperEl;
};

setTimeout(() => {
  document.body.append(popupLegalAgeEl());
}, 3000);

//dinamico:
const popupLegalAgeEldinamic = (text) => {
  const wrapperEl = document.createElement("div");
  const textEl = document.createElement("p");

  wrapperEl.className = "popup-legaldin";
  textEl.textContent = text;

  wrapperEl.append(textEl);
  return wrapperEl;
};

setTimeout(() => {
  document.body.append(
    popupLegalAgeEldinamic("Welcome, Are you of Legal Age?")
  );
}, 3000);

//Esercizio #2:
// Eseguire una chiamata di tipo fetch al seguente indirizzo https://dummyjson.com/products.
// Dalla risposta che ne consegue, stampare un array che contiene non
// tutti i valori ma solo quelli il cui prezzo (chiave price) sia inferiore a 50.

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    // Filtra gli oggetti con un prezzo inferiore a 50
    const filteredArray = data.filter((product) => product.price < 50);
  });
