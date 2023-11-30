//  mi creo funzione per generare gli elementi della nav bar
const navElGen = () => {
  const searchNavEl = document.createElement("div");
  const logoImgEl = docuemnt.createElement("img");
  const inputNavEl = document.createElement("input");
  const menuLinksEl = document.createElement("div");
  const ulEl = document.createElement("ul");
  const liTvShowsEl = document.createElement("li");
  const liMoviesEl = document.createElement("li");
  const labelEl = document.createElement("label");
  const selectEl = document.createElement("select");
  const optionEl = document.createElement("option");

  searchNavEl.className = "search";
  logoImgEl.src =
    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png";
  logoImgEl.alt = "netflix-clone-logo";
  inputNavEl.type = "text";
  menuLinksEl.className = "links";
  ulEl.className = "links-list";
  liTvShowsEl.textContent = "TV Shows";
  liMoviesEl.textContent = "Movies";
  labelEl.textContent = "Categories";
  selectEl.id = "categories";
  optionEl.value = "";

  searchNavEl.append(logoImgEl, inputNavEl);
  menuLinksEl.appendChild(ulEl);
  ulEl.append(liTvShowsEl, liMoviesEl, labelEl, selectEl);
  selectEl.appendChild(optionEl);

  return searchNavEl;
};

const listsContainerElGen = (title) => {
  const container = document.createElement("div");
  const titleEl = document.createElement("h3");

  container.className = "lists-container";
  titleEl.textContent = title;

  container.append(titleEl);
  return container;
};

const cardsListElGen = () => {
  const container = document.createElement("div");

  container.className = "cards-list";

  return container;
};

const cardElGen = (imageData) => {
  const imageEl = document.createElement("img");

  imageEl.className = "card-item";
  imageEl.src = `https://image.tmdb.org/t/p/w500${imageData.poster_path}`;
  imageEl.alt = imageData.name;

  return imageEl;
};

// aggiungo la nav bar generata all'export
export { cardElGen, cardsListElGen, listsContainerElGen, navElGen };
