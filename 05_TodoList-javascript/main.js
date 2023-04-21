const inputTodo = document.getElementById("inputText");
const addBtn = document.getElementById("btn-add");
const todoList = document.getElementById("todoList");
const empty = document.getElementById("empty");



addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const todo = inputTodo.value;

  if (todo !== "") {
    const li = document.createElement("li");
    const p = document.createElement('p');
    p.textContent = todo

    li.appendChild(p);
    li.appendChild(addDeleteBtn())
    todoList.appendChild(li)

    inputTodo.value = "";
    empty.style.display = "none"

  }

});



const addDeleteBtn = () => {

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete"
  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    todoList.removeChild(item);

    const items = document.querySelectorAll("li");
    if (items.length === 0) {
      empty.style.display = "block"
    }

  })

  return deleteBtn
}
