const helpBtn = document.querySelector(".help-btn");
const helpDialog = document.querySelector(".help-dialog");
const dialogCloseBtn = document.querySelector(".help-dialog-close-btn");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const complaint = document.querySelector("#complaint");
const submitBtn = document.querySelector("#submit");
const validationError = document.querySelector(".validation-error");

// const firstNameLog = document.querySelector("#first-name-log");
// const lastNameLog = document.querySelector("#last-name-log");
// const emailLog = document.querySelector("#email-log");
// const complaintLog = document.querySelector("#complaint-log");
// const dateLog = document.querySelector("#date-log");

const register = document.querySelector("#register-container");

helpBtn.addEventListener("click", openDialog);
dialogCloseBtn.addEventListener("click", closeDialog);
submitBtn.addEventListener("click", submitComplaint);

function openDialog() {
  helpDialog.style.display = "block";
}

function closeDialog() {
  helpDialog.style.display = "none";
}

function submitComplaint() {
  if (isComplaintValid()) {
    // displayComplaint();
    registerComplaint();
    clearDialogValues();
    closeDialog();
  } else {
    displayErrors();
  }
}

function displayComplaint() {
//   firstNameLog.textContent = firstName.value;
//   lastNameLog.textContent = lastName.value;
//   emailLog.textContent = email.value;
//   complaintLog.textContent = complaint.value;
//   dateLog.textContent = new Date().toLocaleString();
}

function clearDialogValues() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  complaint.value = "";
}

function displayErrors() {
  validationError.style.display = "block";
  if (!firstName.value) {
    applyErrorToField(firstName);
  }
  if (!lastName.value) {
    applyErrorToField(lastName);
  }
  if (!email.value || email.validity.typeMismatch) {
    applyErrorToField(email);
  }
  if (!complaint.value) {
    applyErrorToField(complaint);
  }
}

function isComplaintValid() {
  if (
    !firstName.value ||
    !lastName.value ||
    email.validity.typeMismatch ||
    !complaint.value
  ) {
    return false;
  }

  clearErrors();
  return true;
}

function applyErrorToField(field) {
  field.style.border = "1px solid red";
}

function clearErrors() {
  validationError.style.display = "none";
  clearErrorFromField(firstName);
  clearErrorFromField(lastName);
  clearErrorFromField(email);
  clearErrorFromField(complaint);
}

function clearErrorFromField(field) {
  field.style.border = "1px solid gray";
}

function constructParagraph(title, id, spanContent) {
    const newParagraph = document.createElement('p');
    const paragraphValue = document.createElement ('span');
    newParagraph.textContent = title;
    newParagraph.append(paragraphValue);
    paragraphValue.id = id;
    paragraphValue.textContent = spanContent;
    return newParagraph;
}

function registerComplaint() {
    register.append(constructParagraph('First Name: ', 'first-name-log', firstName.value));
    register.append(constructParagraph('Last Name: ', 'last-name-log', lastName.value));
    register.append(constructParagraph('Email address: ', 'email-log', email.value));
    register.append(constructParagraph('Complaint: ', 'complaint-log', complaint.value));
    register.append(constructParagraph('Date of complaint: ', 'date-log', new Date().toLocaleString()));
    register.append(gapRaw());
}

function gapRaw () {
    const newGap = document.createElement('br');
    return newGap;
}
