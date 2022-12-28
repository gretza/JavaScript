const newKey = document.querySelector("#new-key");
const keySelection = document.querySelector("#existing-keys");
const inputValue = document.querySelector("#value");
const button = document.querySelector("#button");
const output = document.querySelector("#text");

button.addEventListener("click", updateObject);

const newKeyObject = {};

function updateObject() {
  const newKeyTitle = newKey.value;
  const newKeyValue = inputValue.value;
  newKeyObject[newKeyTitle] = newKeyValue;
  output.textContent = JSON.stringify(newKeyObject);
  createOption();
}

function createOption() {
    const option = document.createElement('option');
    option.textContent = newKey.value;
    option.value = inputValue.value;
    keySelection.append(option);
    keySelection.value = option.value;
    keySelection.disabled = false;
}
