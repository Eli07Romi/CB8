// Sulla base della lezione del giorno,
// scrivere una funzione che simuli il comportamento di un termometro.
//  Prende un solo argomento che rappresenta i gradi e restituisce uno dei seguenti valori:
// caldo - freddo - mite.

function getTemperature(temp) {
  if (temp < 8 && temp >= 0) {
    return "freddo";
  } else if (temp >= 8 && temp <= 20) {
    return "mite";
  } else if (temp > 20 && temp <= 34) {
    return "caldo";
  } else if (temp > 34) {
    return "probabilmente sei in Sicilia";
  } else if (temp < 0) {
    return "sicuramente non sei in Sicilia";
  } else {
    return "Inserisci la Temperatura";
  }
}
console.log(getTemperature());

// Secondo Esercizio:
// Creare un oggetto che vi identifichi come persona,
//  inserite quindi almeno 5 proprietà e 1 metodo al suo interno.
//  Andate ad eseguire l'esecuzione del metodo all'interno del programma.

const mySelf = {
  name: "Elia",
  lastName: "Di Lorenzo",
  age: "31",
  job: "Quality Assurance",
  location: "Palermo",

  myperson: function () {
    console.log(
      "Hey My Name is",
      mySelf.name,
      mySelf.lastName,
      "and I am",
      mySelf.age,
      "years old, I work as",
      mySelf.job,
      "and I am from",
      mySelf.location,
      "."
    );
  },
};

console.log(mySelf.myperson());

// Terzo Esercizio
// Creare un array vuoto chiamato preferiti.
// Scrivere una funzione aggiungiAPreferiti che prende una stringa come parametro
// (che rappresenta l'oggetto del preferito, come il titolo di un film)
// e aggiunge quell'elemento all'array preferiti.
// Scrivere una funzione mostraPreferiti che stampa tutti gli elementi nell'array preferiti.
// Scrivere una funzione rimuoviDaPreferiti che prende una stringa come parametro e
// rimuove quell'elemento dall'array preferiti, se esiste.

const preferiteMovie = [];

// funzioni:

// per aggiungere

function addMovie(title) {
  preferiteMovie.push(title);
}

// per rimuovere *** ho fatto diversi tentativi ma non sono riuscita ad arrivare a una soluzione ancora
// // function removeMovie(title) {
// //   preferiteMovie.splice(2, 5);

// for (let i = 0; i < preferiteMovie.length; i++) {
//   if (preferiteMovie[i] === 5) {
//     preferiteMovie.splice(i, 5);
//   }
// }

// console.log(preferiteMovie);
// function removeMovie(movie) {
//   movie.splice(movie);
// }

//  Invocazioni:
// aggiungo i film all'array:

addMovie("Titanic");
addMovie("Ghost");
addMovie("Casper");
addMovie("Peter Pan");
addMovie("Moulin Rouge");

console.log(preferiteMovie);

// preferiteMovie.splice(2, 3);
