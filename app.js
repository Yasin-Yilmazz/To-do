const container = document.querySelector(".container");
const day = document.getElementById("day");
const month = document.getElementById("month");
const taskCount = document.getElementById("task-count");
const todoInput = document.getElementById("todo");
const todoItem = document.getElementById("todo-item");
const todoCards = document.querySelector(".to-do");

// VARIABLES
let dayOfWeekName, dayOfMonth, monthName, taskNumber;
let isEditable = true;
let isDone = false;

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

container.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("fa-plus")) {
    createCard(e);
  }
  todoInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      createCard(e);
    }
  });

  if (e.target.classList.contains("edit-btn")) {
    editBtn();
  }
  if (e.target.classList.contains("fa-trash")) {
    removeTodo(e);
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

// CreateCard
const createCard = (e) => {
  const card = document.createElement("div");
  card.className = "card";

  const ul = document.createElement("ul");
  ul.className = "list-group list-group-flush";

  const li = document.createElement("li");
  li.className = "list-group-item d-flex flex-row justify-content-between";

  const btnCheck = document.createElement("button");
  btnCheck.className = "btn";

  const check = document.createElement("i");
  check.className = "fa-solid fa-check text-success";

  const input = document.createElement("input");
  input.setAttribute("disabled", "");
  input.className = "todo-item";
  input.id = "todo-item";
  input.type = "text";

  const btnEdit = document.createElement("button");
  btnEdit.className = "btn btn-warning mx-2 edit-btn";
  btnEdit.id = "edit-btn";
  btnEdit.textContent = "EDIT";

  const btnTrash = document.createElement("button");
  btnTrash.className = "btn todo-item-delete text-danger";
  btnTrash.id = "todo-item-delete";

  const trash = document.createElement("i");
  trash.className = "fa-solid fa-trash";
  btnCheck.appendChild(check);
  btnTrash.appendChild(trash);
  li.appendChild(btnCheck);
  li.appendChild(input);
  li.appendChild(btnEdit);
  li.appendChild(btnTrash);
  ul.appendChild(li);
  card.appendChild(ul);
  const todoItem = document.getElementById("todo-item");
  if (todoInput.value != "") {
    todoCards.appendChild(card);
    todoItem.value = todoInput.value;
    todoInput.value = "";
  } else {
    alert("Input can not be empty");
  }

  //   editBtn();
};

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

const checkIsDone = () => {
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
};
