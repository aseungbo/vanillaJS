const todoTemplate = document.querySelector(".todoTemplate");
const todoForm = document.querySelector(".todoForm");
const todoInput = document.querySelector(".todoInput");
const todoList = document.querySelector(".todoList");
const TODOKEY = "todos";
const todos = [];

const saveTodos = () => {
  localStorage.setItem(TODOKEY, JSON.stringify(todos));
};

const loadTodos = () => {
  JSON.parse(localStorage.getItem(TODOKEY)).forEach((ele) => {
    paintTodoList(ele);
    todos.push(ele);
  });
};

const deleteTodo = (e) => {
  const li = e.target.parentElement;
  li.remove();
};

const paintTodoList = (newTodo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener("click", deleteTodo);
  todoList.appendChild(li);
};

const onTodoSubmit = (e) => {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  todos.push(newTodo);
  paintTodoList(newTodo);
  saveTodos();
};

if (localStorage.getItem(TODOKEY)) loadTodos();
todoForm.addEventListener("submit", onTodoSubmit);
