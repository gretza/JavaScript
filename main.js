const btn = document.querySelector("#click-btn");
const input = document.querySelector(".input");
const inputValue = document.querySelector("#input-value");

btn.addEventListener("click", logInput);

function logInput() {
    const now = new Date().toLocaleString();
    console.log(now);
    inputValue.textContent = now;
}