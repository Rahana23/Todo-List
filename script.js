const todoInput = document.getElementById("todo-input");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (todoInput.value === "") {
    alert("You must add a task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = todoInput.value;
    listContainer.appendChild(li);
    todoInput.value = ""; // Clear the input after adding the task
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
  }
  saveData;
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
loadData();
