const toDoForm = document.querySelector(".js-form_toDoList"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector("js-toDoList");

const TODO_LS = "toDos";

function enterToDo(text){
    const li=document.createElement("li");
    const li_removeBtn=document.createElement()
}

function handleSubmit_toDo(event) {
  event.preventDefault();
  const currentValue_toDo = toDoInput.value;
  enterToDo(currentValue_toDo);
  toDoInput.value = null;
}



function loadToDos() {
  const toDos = localStorage.getItem(TODO_LS);
  if (toDos !== null) {
    callToDos(toDos);
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit_toDo);
}

init();
