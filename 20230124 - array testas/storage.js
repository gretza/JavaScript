const dataContainer = document.querySelector('#data');
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    dataContainer.textContent += dataContainer.textContent ? `, ${input.value}` : input.value;

    window.localStorage.setItem('userName', input.value)
}) 

const userNames = window.localStorage.getItem('userName', input.value)
console.log(userNames);