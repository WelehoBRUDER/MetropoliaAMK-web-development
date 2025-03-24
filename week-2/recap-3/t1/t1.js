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
  listElem.insertAdjacentHTML(
    "beforeend",
    list
      .map((item) => {
        const {id, task, completed} = item;
        return `
      <li>
        <input type="checkbox" id="todo-${id}" ${completed ? "checked" : ""}>
        <label for="todo-${id}">${task}</label>
      </li>
    `;
      })
      .join("")
  );
}

renderTodoList(todoList);
