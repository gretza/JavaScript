// const inputEL = document.querySelector("#todo-input");
// const btnEl = document.querySelector("#todo-btn");
// const todoListEl = document.querySelector("#todo-list");

// function deleteTodo(elementToDelete) {
//     console.log("ivyksta deleteTodo");
//     todoListEl.removeChild(elementToDelete);
// }

// function createTodo() {
//     const inputText = inputEL.value;
//     const todoEl = document.createElement("li");
//     todoEl.textContent = inputText;
//     inputEL.value = "";

//     todoListEl.append(todoEl);

//     todoEl.addEventListener("click", function () {
//         // todoEl.remove();
//         // todoListEl.removeChild(todoEl);
//         deleteTodo(todoEl);
//     })

//     // const inputText ir todoEl dingsta
//     // pats todoEl egzistuoja DOM'e, bet jo konstanta, kurioje reference yra mums nebepasiekiama.

//     console.log("pasibaige createTodo");
// }

// btnEl.addEventListener("click", createTodo);

// function myFunction() {
//     //1. sukuriam funkcija, bet jos nenaudojam
//     console.log("myFunction")
// }

// // myFunction();

// function callOtherFunction(otherFunction) {
//    return otherFunction;
// }

// const returnedFunction = callOtherFunction(myFunction); // nenaudota funkciją perduodam į callOtherFunction, myFunction
// returnedFunction();

const inputEL = document.querySelector("#todo-input");
const todoButtonEl = document.querySelector("#todo-btn");
const todoListEl = document.querySelector("#todo-list");
const doneListEl = document.querySelector("#done-list");

todoButtonEl.addEventListener("click", addTodo);

function addTodo() {
  inputEL.style.border = "";
  const inputValue = inputEL.value;

  if (!inputValue) {
    inputEL.style.border = "1px solid red";
    return;
  }
  inputEL.value = "";
  const todo = createNewTodo(inputValue);
  todoListEl.append(todo);
}

function createNewTodo(text) {
  const textNode = document.createTextNode(text);
  const newTodo = document.createElement("li");
  const doneButton = document.createElement("button");
  const closeButton = document.createElement("button");
  doneButton.textContent = "V";
  closeButton.textContent = "X";
  newTodo.append(textNode, doneButton, closeButton);

  function deleteTodo() {
    newTodo.remove();
  }

  closeButton.addEventListener("click", deleteTodo);
  doneButton.addEventListener("click", function () {
    deleteTodo();
    createNewDoneEl(text);
  });

  return newTodo;
}

function createNewDoneEl(title) {
  const newDoneEl = document.createElement("li");
  const textNode = document.createTextNode(title);
  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  newDoneEl.append(textNode, closeButton);
  doneListEl.append(newDoneEl);

  function deleteDoneEl() {
    newDoneEl.remove();
  }

  closeButton.addEventListener("click", deleteDoneEl);
}
