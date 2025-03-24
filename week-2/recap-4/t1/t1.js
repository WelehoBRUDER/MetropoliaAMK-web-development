// array for todo list
const todoList = [
  {
    id: 1,
    task: "Learn HTML",
    completed: true,
  },
  {
    id: 2,
    task: "Learn CSS",
    completed: true,
  },
  {
    id: 3,
    task: "Learn JS",
    completed: false,
  },
  {
    id: 4,
    task: "Learn TypeScript",
    completed: false,
  },
  {
    id: 5,
    task: "Learn React",
    completed: false,
  },
];

const listElem = document.querySelector(".todo-list");
function renderTodoList() {
  listElem.innerHTML = "";
  todoList.forEach((item) => {
    const {id, task, completed} = item;
    const listObject = document.createElement("li");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    checkbox.id = `todo-${id}`;
    label.htmlFor = `todo-${id}`;

    deleteButton.addEventListener("click", () => {
      const index = todoList.findIndex((item) => item.id === id);
      todoList.splice(index, 1);
      listElem.removeChild(listObject);
    });

    checkbox.addEventListener("change", () => {
      item.completed = checkbox.checked;
      console.log(todoList);
    });

    label.textContent = task;
    listObject.append(checkbox, label, deleteButton);
    listElem.append(listObject);
  });
}

function showAddModal() {
  const modal = document.querySelector(".add-modal");
  modal.style.display = "flex";
}

function hideAddModal(e) {
  if (e) {
    if (!e.target.classList.contains("add-modal")) {
      return;
    }
  }
  const modal = document.querySelector(".add-modal");
  modal.style.display = "none";
}

function addTodoItem(e) {
  e.preventDefault();
  hideAddModal();
  const data = new FormData(e.target);
  const task = data.get("task");
  const id = todoList.length + 1;
  todoList.push({
    id,
    task,
    completed: false,
  });
  renderTodoList();
}

renderTodoList();
