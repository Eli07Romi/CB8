const createHeader = () => {
  const headerEl = document.createElement("div");
  const titleEl = document.createElement("h1");
  const buttonCompletedEl = document.createElement("button");
  const buttonShowAllEl = document.createElement("button");

  headerEl.className = "header";
  titleEl.textContent = "Priority";
  buttonCompletedEl.textContent = "Completed";
  buttonCompletedEl.className = "btnCompleted";
  buttonShowAllEl.textContent = "Show All";
  buttonCompletedEl.className = "btnCompleted";

  buttonCompletedEl.addEventListener("click", () => {
    hideIncompleteItems();
  });

  buttonShowAllEl.addEventListener("click", () => {
    showAllItems();
  });

  headerEl.append(titleEl, buttonCompletedEl, buttonShowAllEl);

  return headerEl;
};

// dentro questa funzione ho inserito una costante randoTimestamp per
//  convertire l'id dell'array in una data fra il 23 e 24
// stessa cosa per convertire lo status true/false in completed
const createTodoItem = (todoData) => {
  const { userId, title, completed, priority } = todoData;
  const wrapperEl = document.createElement("li");
  const numberEl = document.createElement("h2");
  const titleEl = document.createElement("h3");
  const statusEl = document.createElement("p");
  const priorityEl = document.createElement("p");

  const randomTimestamp =
    new Date("2023-01-01T00:00:00").getTime() +
    Math.random() *
      (new Date("2024-12-31T23:59:59").getTime() -
        new Date("2023-01-01T00:00:00").getTime());

  const userDate = new Date(randomTimestamp);
  userDate.setMinutes(0);
  const userDateString = userDate.toLocaleDateString();

  wrapperEl.className = "todo-item";
  numberEl.textContent = userDateString;
  titleEl.textContent = title;
  statusEl.textContent = completed ? "Completed" : "Not Completed";
  statusEl.className = "status";
  priorityEl.textContent = `Priority: ${priority}`;

  wrapperEl.append(numberEl, titleEl, statusEl, priorityEl);
  return wrapperEl;
};

// mi creo funzione per creare contenitori differenti in base alla priorità
const createPriorityContainer = (priorityRange, title) => {
  const containerEl = document.createElement("div");
  const titleEl = document.createElement("div");
  const listEl = document.createElement("ul");

  containerEl.className = "priority-container";
  titleEl.className = "title-div";
  titleEl.textContent = title;

  containerEl.append(titleEl, listEl);

  return { containerEl, listEl, priorityRange };
};

const rootEl = document.querySelector("#root");
const headerEl = createHeader();
rootEl.appendChild(headerEl);

const highPriorityContainer = createPriorityContainer(
  [4, 5],
  "Appuntamenti ad alta priorità"
);
const importantPriorityContainer = createPriorityContainer(
  [2, 3],
  "Appuntamenti importanti"
);
const lowPriorityContainer = createPriorityContainer(
  [0, 1],
  "Appuntamenti a bassa priorità"
);

highPriorityContainer.containerEl.classList.add("high-priority-container");
importantPriorityContainer.containerEl.classList.add(
  "important-priority-container"
);
lowPriorityContainer.containerEl.classList.add("low-priority-container");

rootEl.append(
  highPriorityContainer.containerEl,
  importantPriorityContainer.containerEl,
  lowPriorityContainer.containerEl
);

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((todoItemData) => {
      const datiConPriorita = {
        ...todoItemData,
        priority: Math.floor(Math.random() * 6),
      };

      const separatePriority = createTodoItem(datiConPriorita);

      if (
        highPriorityContainer.priorityRange.includes(datiConPriorita.priority)
      ) {
        highPriorityContainer.listEl.appendChild(separatePriority);
      } else if (
        importantPriorityContainer.priorityRange.includes(
          datiConPriorita.priority
        )
      ) {
        importantPriorityContainer.listEl.appendChild(separatePriority);
      } else if (
        lowPriorityContainer.priorityRange.includes(datiConPriorita.priority)
      ) {
        lowPriorityContainer.listEl.appendChild(separatePriority);
      }
    });

    highPriorityContainer.containerEl.appendChild(highPriorityContainer.listEl);
    importantPriorityContainer.containerEl.appendChild(
      importantPriorityContainer.listEl
    );
    lowPriorityContainer.containerEl.appendChild(lowPriorityContainer.listEl);
  });

//  Mi creo le funzioni per nascondere o mostrare tutti gli elemnti
// Funzione per nascondere gli elementi non completati
const hideIncompleteItems = () => {
  const allItems = document.querySelectorAll(".todo-item");

  allItems.forEach((item) => {
    const statusEl = item.querySelector(".status");
    if (statusEl.textContent === "Not Completed") {
      item.style.display = "none";
    }
  });
};

// Funzione per mostrare tutti gli elementi
const showAllItems = () => {
  const allItems = document.querySelectorAll(".todo-item");

  allItems.forEach((item) => {
    item.style.display = "";
  });
};
