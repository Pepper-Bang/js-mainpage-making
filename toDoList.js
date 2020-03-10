const toDoForm = document.querySelector(".js-form_toDoList"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";

let toDosArray = [];

function saveToDos() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDosArray));
}

function enterToDo(text) {
  const li = document.createElement("li");
  const li_delBtn = document.createElement("button");
  const li_delIcon = document.createElement("i");
  li_delIcon.classList.add("fas");
  li_delIcon.classList.add("fa-trash-alt");
  li_delIcon.classList.add("fa-2x");
  li_delBtn.appendChild(li_delIcon);
  const li_span = document.createElement("span");
  li_span.innerText = text;
  li_Id = toDosArray.length + 1;
  li.appendChild(li_delBtn);
  li.appendChild(li_span);
  li.id = li_Id;
  toDoList.appendChild(li);
  // li_delBtn.addEventListener("click",delToDo) delToDo만들때까지 대기

  const toDoObj = {
    text: text,
    id: li_Id
  };

  toDosArray.push(toDoObj);
  saveToDos();
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
    const parsedToDos = JSON.parse(toDos);
    parsedToDos.forEach(function(toDo) {
      enterToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit_toDo);
}

init();
