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

function renderTodoList(list) {
  listElem.innerHTML = "";
  todoList.forEach((item) => {
    const {id, task, completed} = item;
    const listObject = document.createElement("li");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    checkbox.id = `todo-${id}`;
    label.htmlFor = `todo-${id}`;
    label.textContent = task;
    listObject.append(checkbox, label);
    listElem.append(listObject);
  });
}

renderTodoList(todoList);
