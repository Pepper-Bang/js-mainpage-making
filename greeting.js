const form = document.querySelector(".js-form_greeting"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  saveName(currentValue);
  showGreeting(currentValue);
}

function askName() {
  greeting.classList.remove("showing");
  form.classList.add("showing");
  form.addEventListener("submit", handleSubmit);
}

function showGreeting(text) {
  form.classList.remove("showing");
  greeting.classList.add("showing");
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askName();
  } else {
    showGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
