// const btn = document.querySelector("#click-btn");
// const input = document.querySelector(".input");
// const inputValue = document.querySelector("#input-value");

// btn.addEventListener("click", logInput);

// function logInput() {
//     const now = new Date().toLocaleString();
//     console.log(now);
//     inputValue.textContent = now;
// }

const helpBtn = document.querySelector("#help");
const form = document.querySelector(".form-content");
const closeBtn = document.querySelector(".close-btn");
const firstName = document.querySelector("#f-name");
const lastName = document.querySelector("#l-name");
const email = document.querySelector("#email");
const complaint = document.querySelector("#complaint");
const submitBtn = document.querySelector("");

helpBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);


function openModal() {
    form.style.display = "block";
}

function closeModal() {
    form.style.display = "none";
}

function isInputValid() {
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const complaintValue = complaint.value;

    if (firstName $$ lastName $$ email $$ complaint) {
        return true;
    } else {
        return false;
    }

}

function submitComplaint () {
    firstName.textContent = firstName.value;
    lastName.textContent = lastName.value;
    email.textContent = email.value;
    complaint.textContent = complaint.value;
}