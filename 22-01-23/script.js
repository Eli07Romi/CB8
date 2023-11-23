// // esercizio 1:
// Async/Await https://picsum.photos/v2/list download_url

const fetchAsync = async () => {
  const result = await fetch("https://picsum.photos/v2/list"); //ritrorna una promise
  const data = await result.json(); //converto i dati json
  const downloadUrls = data.map((image) => image.download_url); //creo variabile per prendere solo download_url come chiave

  console.log(downloadUrls);
};

fetchAsync();

//esercizio 2 :

// dati dell'oggetto: ho provato prima a crearlo senza object, ma non mi funzionava

const object = {
  author: "Alejandro Escamilla",
  download_url: "https://picsum.photos/id/0/5000/3333",
};

//funzione
const rendImgText = (dataobj) => {
  const wrapperEl = document.createElement("div");
  const imageEl = document.createElement("img");
  const authorEl = document.createElement("p");

  wrapperEl.className = "container";
  imageEl.src = dataobj.download_url;
  authorEl.textContent = dataobj.author;

  wrapperEl.append(imageEl, authorEl);
  return wrapperEl;
};

document.body.appendChild(rendImgText(object));

console.log(rendImgText);

//esercizio 3:

//creo una funzione per richiamare la fetch già creata precedentemente

const renderListImages = async () => {
  const data = await fetchAsync();

  const elements = data.map((images) => rendImgText(images));
  document.body.append(...elements); ////utilizzo map e poi appendo con spread -
};
//potrei utilizzare o for each or map per creare array di elementi

renderListImages();
