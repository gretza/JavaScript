const zeroTab = document.querySelector(".zero-tab");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");

const firstTab = document.querySelector(".first-tab");
const primaryAddrress = document.querySelector("#primary-address");
const secondaryAddress = document.querySelector("#secondary-address");
const shirtSize = document.querySelector("#shirt-size");

const secondTab = document.querySelector(".second-tab");
const pswError = document.querySelector("#psw-error");
const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeat-password");

const thirdTab = document.querySelector(".third-tab");
// const result = document.querySelector('#result');

const backBtn = document.querySelector("#back-btn");
const continueBtn = document.querySelector("#continue-btn");

const hiddenClass = "hidden";
const errorClass = "error";

continueBtn.addEventListener("click", onContinue);

const result = {
  step: 0,
  user: {},
};

function onContinue(event) {
  event.preventDefault();
  switch (result.step) {
    case 0:
      if (
        !firstName.value ||
        !lastName.value ||
        !email.value ||
        email.validity.typeMismatch
      ) {
        if (!firstName.value) {
          applyErrorToInput(firstName);
        }
        if (!lastName.value) {
          applyErrorToInput(lastName);
        }
        if (!email.value || email.validity.typeMismatch) {
          applyErrorToInput(email);
        }
      } else {
        result.user.firstName = firstName.value;
        result.user.lastName = lastName.value;
        result.user.email = email.value;
        result.step += 1;
        displayWizardStep(1 /* or ++result.step */);
      }
      break;
    case 1:
      if (!primaryAddrress.value || !shirtSize.value) {
        if (!primaryAddrress.value) {
          applyErrorToInput(primaryAddrress);
        }
        if (!shirtSize.value) {
          applyErrorToInput(shirtSize);
        }
      } else {
        result.user.primaryAddrress = primaryAddrress.value;
        result.user.shirtSize = shirtSize.value;
        if (secondaryAddress.value) {
          result.user.secondaryAddress = secondaryAddress.value;
        }
        console.log(result.user);
        clearErrors();
      }
  }
}

function applyErrorToInput(input) {
  input.classList.add("error");
}

function displayWizardStep(step) {
  switch (step) {
    case 0:
      zeroTab.classList.remove(hiddenClass);
      firstTab.classList.add(hiddenClass);
      secondTab.classList.add(hiddenClass);
      thirdTab.classList.add(hiddenClass);
      backBtn.classList.add(hiddenClass);
      break;
    case 1:
      zeroTab.classList.add(hiddenClass);
      firstTab.classList.remove(hiddenClass);
      secondTab.classList.add(hiddenClass);
      thirdTab.classList.add(hiddenClass);
      backBtn.classList.remove(hiddenClass);
      break;
    case 2:
      zeroTab.classList.add(hiddenClass);
      firstTab.classList.add(hiddenClass);
      secondTab.classList.remove(hiddenClass);
      thirdTab.classList.add(hiddenClass);
      backBtn.classList.remove(hiddenClass);
      break;
    case 3:
      zeroTab.classList.add(hiddenClass);
      firstTab.classList.add(hiddenClass);
      secondTab.classList.add(hiddenClass);
      thirdTab.classList.remove(hiddenClass);
      backBtn.classList.remove(hiddenClass);
  }
}

function onBack(even) {
  event.preventDefault();
  displayWizardStep(result.step - 1);
  result.step -= 1;
}

function clearErrors() {
  firstName.classList.remove(errorClass);
  lastName.classList.remove(errorClass);
  email.classList.remove(errorClass);
  primaryAddrress.classList.remove(errorClass);
}
