const d = document,
  list = d.querySelector(".todo ul"),
  input = d.querySelector(".form input"),
  btnAdd = d.querySelector(".btn--add"),
  btnremove = d.querySelector(".btn--remove"),
  btnclearAll = d.querySelector(".btn--clearAll"),
  template = d.querySelector("#template"),
  fragment = d.createDocumentFragment();
let tareas = [];

d.addEventListener("click", (e) => {
  if (e.target.matches(".btn--add")) {
    agregartarea();
  }
  if (e.target.matches(".btn--remove")) {
  }
  if (e.target.matches(".btn--clearAll")) {
  }
});

const agregartarea = () => {
  const tarea = input.value;
  
  if (tarea === "") {
    error("Ingrese una tarea");
    return;
  }

  const objTareas = {
    id: Date.now(),
    titulo: tarea,
  };
  tareas = [...tareas, objTareas];
  input.value = "";
  pintarTareas();
};

const pintarTareas = () => {
  list.textContent = "";
  tareas.map((item) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".text--li").textContent = item.titulo;

    const button = d.createElement("button");
    button.classList.add("btn", "btn--remove");
    button.textContent = "-";
    clone.querySelector(".text--li").appendChild(button);
    fragment.appendChild(clone);
  });
  list.appendChild(fragment);
  LocalStorage();
};

// conexion con localStorage
const LocalStorage = () => {
  localStorage.setItem("tareas", JSON.stringify(tareas));
};

// mostrar las tareas al inicio de la app
const eventListeners = () => {
  d.addEventListener("DOMContentLoaded", () => {
    tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    pintarTareas();
  });
};
eventListeners();

const error = (message) => {
  const li = document.createElement("li");
  li.textContent = message;
  li.classList.add("error");
  list.insertAdjacentElement("afterbegin", li);
  // beforeend
  // beforebegin
  // afterend
  setTimeout(() => li.remove(), 1000);
};
