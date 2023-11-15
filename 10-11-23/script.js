// Esercizio 1:

// creo gli elementi:
const heroEl = document.createElement("div");
const wrapperEl = document.createElement("div2");
const titleEl = document.createElement("h1");
const paragraphEl = document.createElement("p");
const btnEl = document.createElement("button");

// do gli attributi:

heroEl.setAttribute("class", "hero");
wrapperEl.setAttribute("class", "wrapper");

//  do agli elementi il contenuto:

titleEl.textContent = "My First Hero Card";
paragraphEl.textContent =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum vitae dicta, accusamus consequatur perspiciatis doloribus quaerat quae facilissequi itaque.";
btnEl.textContent = "Click";

// appendo gli elementi per renderli visibili:

document.body.append(heroEl);
heroEl.append(wrapperEl, paragraphEl, titleEl, btnEl);

// End Esercizio 1

// Esercizio 2:

btnEl.addEventListener("click", () => {
  console.log("clickBtn");
  heroEl.style.display = "none";

  return heroEl;
});
