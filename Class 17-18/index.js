// document.querySelector('body').addEventListener('click', function() {
//   console.log('Body > Bubbling');
// });

// document.querySelector('body').addEventListener('click', function() {
//   console.log('Body > Capturing');
// }, true);

const todoWrapper = document.getElementById("todoList");
// todoWrapper.addEventListener('click', function() {
//   console.log('Todo Wrapper');
// })

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
listWrapper.addEventListener("click", function (ev) {
  if (ev.target.tagName === "BUTTON") {
    const selectedId = ev.target.closest(".todoItem").getAttribute("data-id");
    removeTodoItem(selectedId);
  }

  if (ev.target.tagName === "SPAN") {
    replaceTextBoxWithInputBox(ev);
  }
});
listWrapper.addEventListener("keypress", function (ev) {
  onTodoUpdate(ev);
});
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
  }).then((res) => res.json());
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

function removeTodoItem(selectedId) {
  //const selectedId = ev.target.parentElement.getAttribute("data-id");
  deleteTodo(selectedId).then(() => {
    const selectedTodoItemIndex = todoListData.findIndex(
      (item) => item.id == selectedId
    );
    todoListData.splice(selectedTodoItemIndex, 1);
    clearTodoList();
    renderTodoList();
  });
}

function onTodoUpdate(ev) {
  ev.stopPropagation();
  if (ev.key == "Enter") {
    const updatedValue = ev.target.value;
    const selectedId = ev.target.parentElement.getAttribute("data-id");
    const selectedTodoItemIndex = todoListData.findIndex((item) => {
      return item.id == selectedId;
    });
    todoListData.splice(selectedTodoItemIndex, 1, {
      ...todoListData[selectedTodoItemIndex],
      todo: updatedValue,
    });
    clearTodoList();
    renderTodoList();
  }
}

function replaceTextBoxWithInputBox(ev) {
  ev.stopPropagation();
  const inputBox = document.createElement("input");
  inputBox.value = ev.target.innerHTML;
  inputBox.style.width = "100%";
  const parenetEl = ev.target.parentElement;
  parenetEl.replaceChild(inputBox, ev.target);
  parenetEl.querySelector("button").style.display = "none";
  // inputBox.addEventListener('click', function(ev) {
  //   ev.stopPropagation();
  // })
  // inputBox.addEventListener('keypress', onTodoUpdate);
}

function renderTodoItem(item) {
  const todoItem = document.createElement("li");
  todoItem.classList.add("todoItem");
  todoItem.setAttribute("data-id", item.id);
  // todoItem.addEventListener('click', function(ev) {
  //   todoItem.style.backgroundColor = 'red';
  //   console.log('Todo Item Li');
  // })

  listWrapper.append(todoItem);

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  todoItem.append(checkBox);
  checkBox.onchange = function () {
    console.log("Checkbox");
  }; //toggleTodoItem;

  const textBox = document.createElement("span");
  textBox.innerHTML = item.todo;
  // textBox.addEventListener('click', replaceTextBoxWithInputBox);
  todoItem.append(textBox);

  const buttonBox = document.createElement("button");
  buttonBox.innerHTML = "Remove";
  // buttonBox.addEventListener('click', function() {
  //   console.log('Remove Button');
  // })//removeTodoItem;
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

document
  .querySelector("#description a")
  .addEventListener("click", function (ev) {
    ev.preventDefault();
    window.open("https://www.youtube.com/@engineerchirag", "_blank");
  });

const fetchPromise = new Promise((success, reject) => {
  fetch("https://dummyjson.com/users/15/todos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status === 404) {
        throw new Error("Endpoint doesn't exists");
      }
      return res.json();
    })
    .then((data) => success(data))
    .catch((err) => reject(err));
});

fetchPromise
  .then((data) => console.log("Success >", data))
  .catch((err) => console.log("Error >", err));

// Write a function to generate a random value after 5sec,
// it should return success if number > 5 else throw error.

function generateNumber() {
  const myPromise = new Promise((success, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10 + 1);
      if (randomNumber >= 5) {
        success(randomNumber);
      } else {
        reject("Error generating number");
      }
    }, 5000);
  });

  myPromise
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}

generateNumber();
