const toDoForm = document.querySelector('#todoForm');
const toDoInput = document.querySelector('#inputTodo');
const toDoList = document.querySelector('#todoList');
let toDoArr = [];
const TODOS_KEY = "todos"


function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDoArr))
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDoArr = toDoArr.filter((i) =>i.id !== parseInt(li.id))
    saveToDo()
}


function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id
    const span = document.createElement("span");
       span.innerText = newToDo.text;
    const button = document.createElement('button');
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
       li.appendChild(button);
    toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = ''
    const newToDoObj = { text : newToDo, id: Date.now(),}
    toDoArr.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos){
    const parseSaveToDos = JSON.parse(saveToDos);
    toDoArr = parseSaveToDos;
    parseSaveToDos.forEach(paintToDo);
}

