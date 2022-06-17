const d = document,
  $ = (selector) => d.querySelector(selector),
  $input = $(".form input"),
  $todo = $(".todo ul"),
  $template = $("#template"),
  $textFooter = $(".text--footer");
fragment = d.createDocumentFragment();
let arrayTareas = [];

d.addEventListener("click", (e) => {
  if (e.target.matches(".btn--add")) {
    agregarTarea(e);
  }
  if (e.target.matches(".btn--remove")) {
    quitarTarea(e);
  }
  if (e.target.matches(".btn--clearAll")) {
    clearAll(e);
  }
});

const agregarTarea = () => {
  const inputValue = $input.value;
  if (inputValue === "") {
    messageError("Ingrese una tarea");
    return;
  }
  const objTareas = {
    titulo: inputValue,
    id: Date.now(),
  };

  arrayTareas = [...arrayTareas, objTareas];
  //   console.log(arrayTareas);

  pintarTareas();
  $input.value = "";
  contadorTareas();
};

const quitarTarea = (e) => {
  //   console.log(typeof e.target.dataset.id);
  const eliminarId = parseInt(e.target.getAttribute("data-id"));
  //   console.log(typeof eliminarId);

  arrayTareas = arrayTareas.filter((item) => item.id !== eliminarId);
  console.log(arrayTareas);
  pintarTareas();
  contadorTareas();
};

const clearAll = () => {
  arrayTareas = [];
  pintarTareas();
  contadorTareas();
};

const contadorTareas = () => {
  if (arrayTareas.length === 0) {
    $textFooter.textContent = "No hay tareas";
  } else if (arrayTareas.length === 1) {
    $textFooter.textContent = `${arrayTareas.length} tarea pendiente`;
  } else {
    $textFooter.textContent = `${arrayTareas.length} tareas pendientes`;
  }
};

const pintarTareas = () => {
  $todo.textContent = "";
  arrayTareas.map((item) => {
    const clone = $template.content.cloneNode(true);
    clone.querySelector(".text--li .li").textContent = item.titulo;

    const attribute = d.createAttribute("data-id");
    attribute.value = item.id;
    clone.querySelector(".text--li .btn--remove").setAttributeNode(attribute);

    fragment.appendChild(clone);
  });
  $todo.appendChild(fragment);

  sincronizacionLocalstorage();
};

const sincronizacionLocalstorage = () => {
  localStorage.setItem("tareas", JSON.stringify(arrayTareas));
};

function eventListener() {
  d.addEventListener("DOMContentLoaded", (e) => {
    arrayTareas = JSON.parse(localStorage.getItem("tareas")) || [];
    pintarTareas();
    contadorTareas();
  });
}
eventListener();

const messageError = (message) => {
  //   console.log(message);
  const createLi = d.createElement("li");
  createLi.textContent = message;
  createLi.classList.add("error");
  $todo.insertAdjacentElement("afterbegin", createLi);
  setTimeout(() => createLi.remove(), 1500);
};

let a = [1, 2, 3, 4, 5];
a = a.filter((item) => item !== 1);
console.log(a);
