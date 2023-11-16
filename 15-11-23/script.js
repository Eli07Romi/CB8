// Funzione per creare un elemento
const createEl = (element) => document.createElement(element);

// prodotti - Array di oggetti:
const mockData = [
  {
    id: 123,
    roboName: "Eli",
    price: "550€",
    imageUrl: "https://robohash.org/eli",
    color: "violet",
  },
  {
    id: 234,
    roboName: "Nico",
    price: "600€",
    imageUrl: "https://robohash.org/nico",
    color: "yellow",
  },
  {
    id: 345,
    roboName: "Romi",
    price: "250€",
    imageUrl: "https://robohash.org/romi",
    color: "white",
  },
  {
    id: 456,
    roboName: "Fra",
    price: "800€",
    imageUrl: "https://robohash.org/fra",
    color: "green",
  },
];

// Funzione per generare e restituire un elemento robot
const roboProdGen = (roboData) => {
  const wrapperEl = createEl("div");
  const headerEl = createEl("header");
  const headerWrapper = createEl("div");
  const container = createEl("div");
  const containerWrapper = createEl("div");
  const imgEl = createEl("img");
  const textEl = createEl("div");
  const priceEl = createEl("p");
  const nameEl = createEl("h4");

  headerEl.className = "robo";
  headerWrapper.className = "head-wrap";
  container.className = "icons";
  containerWrapper.className = "cont-wrap";
  imgEl.src = roboData.imageUrl;
  imgEl.alt = roboData.roboName;
  textEl.className = "text";
  priceEl.textContent = roboData.price;
  nameEl.textContent = roboData.roboName;

  // Appendo gli elementi

  headerWrapper.append(container);
  container.appendChild(imgEl);
  container.appendChild(textEl);
  textEl.append(priceEl, nameEl);
  wrapperEl.append(headerEl, headerWrapper);

  return wrapperEl;
};

mockData.map((robo) => {
  const roboElement = roboProdGen(robo);
  document.body.appendChild(roboElement);
});

// try and catch: - non lo lascio perchè mi ritorna tutti gli elementi con il forEach

// try {
//   mockData.forEach((robo) => document.body.appendChild(roboProdGen(robo)));
// } catch (error) {
//   if (error.message.includes("non ci sono elementi")) {
//     console.error("Non ci sono elementi nel mockData");
//   } else {
//     console.error("Errore generico:", error.message);
//   }
// } finally {
//   console.log("Tutto Ok");
// }
