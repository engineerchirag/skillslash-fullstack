const todoWrapper = document.getElementById("todoList");

// Input Wrapper
const inputWrapper = document.createElement("section");
inputWrapper.id = "inputWrapper";

// Input box
const inputBox = document.createElement("input");
inputBox.placeholder = "Add a new item";
inputBox.addEventListener("keypress", function (ev) {
  if (ev.key == "Enter") {
    addTodoItem(ev.target.value);
    inputBox.value = "";
  }
});

inputWrapper.append(inputBox);
todoWrapper.append(inputWrapper);

// List
const listWrapper = document.createElement("section");
listWrapper.id = "listWrapper";

todoWrapper.append(listWrapper);

// Load todo list
let todoListData;

function fetchTodoList() {
  fetch("https://dummyjson.com/users/15/todos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      todoListData = data.todos;
      renderTodoList();
    })
    .catch((err) => console.log(err));
}

function toggleCompletedStatus(todoId, completed) {
  return fetch(`https://dummyjson.com/todos/${todoId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      completed: completed,
    }),
  }).then((res) => res.json());
}

function createTodo(todo) {
  return fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo,
      completed: false,
      userId: 15,
    }),
  }).then((res) => res.json());
}

function deleteTodo(selectedId) {
  return fetch(`https://dummyjson.com/todos/${selectedId}`, {
    method: "DELETE",
  })
    .then((res) => res.json());
}

function clearTodoList() {
  listWrapper.innerHTML = "";
}

function renderTodoList() {
  todoListData.forEach((item) => {
    renderTodoItem(item);
  });
}

function addTodoItem(value) {
  createTodo(value).then((data) => {
    todoListData.push(data);
    renderTodoItem(data);
  });
}

function toggleTodoItem(ev) {
    const selectedId = ev.target.parentElement.getAttribute("data-id");
    const selectedTodoItem = todoListData.find((item) => item.id == selectedId);
    selectedTodoItem.completed = !selectedTodoItem.completed;
    toggleCompletedStatus(selectedId, selectedTodoItem.completed).then((data) => {
        clearTodoList();
        renderTodoList();
    });
}

function removeTodoItem(ev) {
    const selectedId = ev.target.parentElement.getAttribute("data-id");
    deleteTodo(selectedId).then(() => {
        const selectedTodoItemIndex = todoListData.findIndex(
            (item) => item.id == selectedId
          );
          todoListData.splice(selectedTodoItemIndex, 1);
          clearTodoList();
          renderTodoList();
    })
}

function renderTodoItem(item) {
  const todoItem = document.createElement("li");
  todoItem.classList.add("todoItem");
  todoItem.setAttribute("data-id", item.id);

  listWrapper.append(todoItem);

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  todoItem.append(checkBox);
  checkBox.onchange = toggleTodoItem;

  const textBox = document.createElement("span");
  todoItem.append(textBox);
  textBox.innerHTML = item.todo;

  const buttonBox = document.createElement("button");
  buttonBox.innerHTML = "Remove";
  buttonBox.onclick = removeTodoItem;
  todoItem.append(buttonBox);

  if (item.completed) {
    todoItem.classList.add("completed");
    checkBox.checked = true;
    buttonBox.style.display = "none";
  }
}

fetch("https://dummyjson.com/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    username: "kminchelle",
    password: "0lelplR",
    expiresInMins: 60, // optional
  }),
})
  .then((res) => res.json())
  .then((data) => {
    fetchTodoList();
  })
  .then(console.log);
