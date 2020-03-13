const ToDoForm = document.querySelector(".js-form_toDoList"),
  ToDoInput = ToDoForm.querySelector("input"),
  ToDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";

let toDosArray = [];

function saveToDos() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDosArray));
}

function delToDo(event) {
  let targetLi = event.target.parentNode;

  ToDoList.removeChild(targetLi);
  let resetToDosArray=toDosArray.filter(function(toDo){
    // console.log(toDo.id, targetLi.id);
    return toDo.id !=targetLi.id;
  })
  toDosArray =resetToDosArray;
  saveToDos();


function enterToDo(text) {
  const li = document.createElement("li");
    li.classList.add("to-do-list");
  const liDelBtn = document.createElement("button");
    liDelBtn.innerText = "✖";
  const liSpan = document.createElement("span");

  li.appendChild(liDelBtn);
  li.appendChild(liSpan);
  liSpan.innerText = text;
  ToDoList.appendChild(li);

  let liId = toDosArray.length + 1;
  li.id=liId;

  const toDoObj = {
    text: text,
    id: liId
  };

  toDosArray.push(toDoObj);
  saveToDos();

  liDelBtn.addEventListener("click", delToDo);
}

function handleSubmit_toDo(event) {
  event.preventDefault();
  const currentValue_toDo = ToDoInput.value;
  enterToDo(currentValue_toDo);
  ToDoInput.value = null;
}

function loadToDos() {
  const toDos = localStorage.getItem(TODO_LS);
  if (toDos !== null) {
    const parsedToDos = JSON.parse(toDos);
    parsedToDos.forEach(function (toDo) {
      enterToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  ToDoForm.addEventListener("submit", handleSubmit_toDo);
}

init();
