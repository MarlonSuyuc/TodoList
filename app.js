const $inputTarea = document.querySelector("#ingreso"),
  $template = document.querySelector("#template"),
  todoList = document.querySelector("#todoList"),
  fragment = document.createDocumentFragment();
let listaTareas = [];

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn--add")) {
    agregarTarea();
  }
});

const agregarTarea = () => {
  let tarea = $inputTarea.value;
  if (tarea === "") {
    err("No hay datos que enviar");
    return;
  }

  const tareasObjeto = {
    tarea: tarea,
    id: Date.now(),
  };
  listaTareas.push(tareasObjeto);
  console.log(listaTareas);
  pintarTarea();
  $inputTarea.value = "";
};

const pintarTarea = () => {
  console.log("pintando las tareas");
  
  listaTareas.forEach((item) => {});
};

const err = (message) => {
  let i = document.createElement("LI");
  i.classList.add("err");
  i.textContent = message;
  todoList.insertAdjacentElement("afterbegin", i);

  setTimeout(() => i.remove(), 1000);
};
