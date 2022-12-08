const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalAcceptBtn = document.querySelector(".modal-accept-btn");
const openModalBtn = document.querySelector("#open-modal");

openModalBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);
modalAcceptBtn.addEventListener('click', closeModal);
modalAcceptBtn.addEventListener('click', onAccept);
modal.addEventListener('click', onOuterClick);

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function onAccept() {
    console.log('accepted');
}

function onOuterClick(event) {
    if (event.target === modal) {
        closeModal()
    }
}