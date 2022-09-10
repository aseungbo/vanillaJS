const todoTemplate = document.querySelector(".todoTemplate");
const todoForm = document.querySelector(".todoForm");
const todoInput = document.querySelector(".todoInput");
const todoList = document.querySelector(".todoList");

const paintTodoList = (newTodo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  todoList.appendChild(li);
};

const onTodoSubmit = (e) => {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintTodoList(newTodo);
};

if (localUserName !== null) {
  todoTemplate.classList.remove(HIDDEN_CLASSNAME);
  todoForm.addEventListener("submit", onTodoSubmit);
}
