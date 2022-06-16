const container = document.querySelector(".container");
const day = document.getElementById("day");
const month = document.getElementById("month");
const taskCount = document.getElementById("task-count");
const todoInput = document.getElementById("todo");
const todoItem = document.getElementById("todo-item");
const todoCards = document.querySelector(".to-do");
const todoUl = document.querySelector(".todo-ul");
// VARIABLES
let dayOfWeekName, dayOfMonth, monthName, taskNumber;
let isEditable = true;
let todos = JSON.parse(localStorage.getItem("todos")) || [];

renderSavedTodos();

function renderSavedTodos() {
  todos.forEach((todo) => {
    createLiElement(todo);
  });
}

// GET DATES
let dayOfWeekDigit = new Date().getDay();
dayOfWeekName = new Date().toLocaleString("default", { weekday: "long" });
let date = new Date();
dayOfMonth = date.getDate();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d = new Date();
monthName = monthNames[d.getMonth()];

// SET DATES
day.innerText = `${dayOfWeekName},${dayOfMonth}th`;
month.innerText = monthName;

// ONLOAD
window.onload = () => {
  todoInput.focus();
};

// set add button
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-plus")) {
    // createCard(e);
    if (!todoInput.value) {
      alert("Please enter your todo");
    } else {
      const todoObject = {
        id: d.getTime(),
        isDone: false,
        content: todoInput.value,
      };
      todos.push(todoObject);

      localStorage.setItem("todos", JSON.stringify(todos));

      createLiElement(todoObject);
      todoInput.value = "";
    }
    console.log(id, isDone, content);
  }
  todoInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      e.target.classList.contains(".fa-plus").click();
    }
  });

  if (e.target.classList.contains("edit-btn")) {
    // editBtn();
  }
  if (e.target.classList.contains("fa-trash")) {
    // removeTodo(e);
  }
  if (e.target.classList.contains("clearAllButton")) {
    removeAll();
  }

  if (e.target.classList.contains("fa-check")) {
    // checkIsDone(e);
    const todoItem = document.getElementById("todo-item");
    const check = document.querySelector(".fa-check");
    if (!isDone) {
      check.classList.remove("fa-check");
      todoItem.classList.add("line-through");
      check.classList.add("fa-x");
      check.classList.add("text-danger");
      isDone = false;
      console.log(isDone);
    } else {
      check.classList.add("fa-check");
      todoItem.classList.remove("line-through");
      check.classList.remove("fa-x");
      check.classList.remove("text-danger");
      isDone = true;
      console.log(isDone);
    }
  }
});

const editBtn = () => {
  const todoItem = document.getElementById("todo-item");
  const editButton = document.getElementById("edit-btn");

  if (!isEditable) {
    todoItem.removeAttribute("disabled");
    editButton.innerText = "SAVE";
    isEditable = !isEditable;
    todoItem.focus();
  } else {
    todoItem.setAttribute("disabled", "");
    editButton.innerText = "EDIT";
    isEditable = !isEditable;
  }
};

const removeTodo = () => {
  todoCards.removeChild(document.querySelector(".card"));
};

const removeAll = () => {
  todoCards.remove();
};

// const checkIsDone = () => {
//   const todoItem = document.getElementById("todo-item");
//   const check = document.querySelector(".fa-check");
//   if (!isDone) {
//     check.classList.remove("fa-check");
//     todoItem.classList.add("line-through");
//     check.classList.add("fa-x");
//     check.classList.add("text-danger");
//     isDone = false;
//     console.log(isDone);
//   } else {
//     check.classList.add("fa-check");
//     todoItem.classList.remove("line-through");
//     check.classList.remove("fa-x");
//     check.classList.remove("text-danger");
//     isDone = true;
//     console.log(isDone);
//   }
// };

function createLiElement(todo) {
  const { id, content, isDone } = todo;
  todoUl.innerHTML += `
   <li class="list-group-item d-flex flex-row justify-content-between" id = ${id}>
     <button class="btn">
       <i class="fa-solid fa-check text-success"></i>
     </button>
     <input type="text" class="todo-item" id="todo-item" value = ${content} disabled />
     <button class="btn btn-warning mx-2 edit-btn" id="edit-btn">
       EDIT
     </button>
     <button class="btn todo-item-delete text-danger" id="todo-item-delete">
       <i class="fa-solid fa-trash"></i>
     </button>
    </li>
  `;
}
