const toDo_form = document.querySelector(".js-form_toDoList"),
  toDo_input = toDo_form.querySelector("input"),
  toDo_list = document.querySelector("js-toDoList");

const toDos_LS = "toDoList-LS";

function showToDo(text) {
  console.log(text);
}

function loadToDos() {
  const toDos = localStorage.getItem(toDos_LS);
  if (toDos !== null) {
  }
}

function handleSubmit(event) {    
  event.preventDefault();
  const currentValue = toDo_input.value;
}

function init() {
  loadToDos();
  toDo_form.addEventListener("submit", handleSubmit);
}

init();
