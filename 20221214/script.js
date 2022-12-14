//1.
// const selectElement = document.querySelector("#ice-cream");

// function selectListener(event) {
//   console.log("event", event);
//   console.log("event.target", event.target);
//   console.log("event.targer.value", event.target.value);
//   console.log("selectElement", selectElement);
// }

// selectElement.addEventListener("change", selectListener);

// window.addEventListener("resize", function (event) {
//   console.log("resize");
// });




//2.
// // Paspaudus ant bet kurio selecto, į programą būtų pridedama eilutė kas buvo paleista

// const changeLogElement = document.querySelector("#change-log");
// const ageSelectorElement = document.querySelector("#age");
// const genderSelectElement = document.querySelector("#gender");

// function changeListener(event) {
//     const changeElement = event.target;
//     console.log(changeElement);

//     //TODO: išgauti šias vertes iš event.target
//     const selectName = event.target.name;
//     const selectValue = event.target.value;

//     const text = `User has change ${selectName} select with a value ${selectValue}`;

//     //TODO: pridėti text turinį prie changeLogElement turinio
//     changeLogElement.innerText += "\n" + text;
// }

// ageSelectorElement.addEventListener("change", changeListener);
// genderSelectElement.addEventListener("change", changeListener);




//3.
// //input
// document.querySelector("#my-input").addEventListener("input", function (event) {
//     console.log(event.target.value)
// })




//4.
// const result = add(2, 3);
// console.log (result);

// function add (a, b) {
//  return a + b;
// }

// function getInputValue (input) {
//     return Number(input.value);
// }

// getInputValue(document.querySelector("#my-input"));




//5.
const firstElement = document.querySelector("#first-number");
const secondElement = document.querySelector("#second-number");
const buttonDivide = document.querySelector("#divide");
const buttonMultiply = document.querySelector("#multiply");
const resultElement = document.querySelector("#result");

buttonMultiply.addEventListener("click", function(){
    resultElement.innerText = firstElement.value * secondElement.value;
})

buttonDivide.addEventListener("click", function(){
    resultElement.innerText = firstElement.value / secondElement.value;
})



// buttonMultiply.addEventListener("click", function(){
//     const firstValue = getElementValue(firstElement);
//     const secondValue = getElementValue(secondElement);
//     const resultValue = multiply(firstValue, secondValue);
//     resultElement.innerText = resultValue;
// })

// buttonDivide.addEventListener("click", function(){
//     const firstValue = getElementValue(firstElement);
//     const secondValue = getElementValue(secondElement);
//     const resultValue = divide(firstValue, secondValue);
//     resultElement.innerText = resultValue;
// })

// function getElementValue(element) {
//     const elementValue = Number(element.value);
//     return elementValue;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }
