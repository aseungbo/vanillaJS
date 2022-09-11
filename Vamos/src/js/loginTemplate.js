const loginForm = document.querySelector(".loginForm");
const loginInput = document.querySelector(".loginInput");
const greeting = document.querySelector(".greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const localUserName = localStorage.getItem(USERNAME_KEY);

function onLoginSumbit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  todoTemplate.classList.remove(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreeting(userName);
}

function paintGreeting(username) {
  greeting.innerText = `Hola  \n${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (localUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSumbit);
} else paintGreeting(localUserName);
