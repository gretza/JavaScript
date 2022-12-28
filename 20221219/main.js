// const btn = document.querySelector("#click-btn");
// const input = document.querySelector("#input");
// const inputValue = document.querySelector("#input-value");
// const selectInput = document.querySelector("select");

// document.querySelector('#event-target-test');
// btn.addEventListener("click", logInput);

// selectInput.addEventListener('change', onChange);

// function onChange(event) {
//     console.log(event.target.value);
// }

// const body = document.createSelector('body');
// const heading2 = document.createElement('h2');
// const btn2 = document.createElement('button');
// heading2.textContent = 'Hello World Number 2!';
// btn2.textContent = 'Oh No!';
// heading2.append(btn2);
// body.append(heading2, heading1);
// console.log(heading1);

const formType = document.querySelector('#form-type');
const budgetForm = document.querySelector('#budget-container');
const expenseForm = document.querySelector('#expense-container');

formType.addEventListener('change', onChange);
budgetForm.addEventListener('click', addBudget);
expenseForm.addEventListener('click', addExpense);

function onChange(event) {
    if (event.target.value === "Current budget") {
        expenseForm.style.display = "none";
    } else {
        budgetForm.style.display = "none";
    }
}