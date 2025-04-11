"use strict";

const paymentForm = document.querySelector(".payment-form");
const radioBtns = document.querySelectorAll(".radio-btn");
const paymentInputs = paymentForm.querySelectorAll("input");
const reg = /^([1-9]{1,8})$/;
const confirmBtn = document.querySelector("#confirm");
const numberInputs = [paymentInputs[0], paymentInputs[2], paymentInputs[3]];
const paymentMissing = document.querySelector("#payment-missing");
const thanksModal = document.querySelector("#thanks-modal");
const paymentOverlay = document.querySelector("#payment-overlay");
const closeBtn = document.querySelector("#close");

// toggle thanks modal

function showThanks() {
  thanksModal.classList.remove("hidden");
  paymentOverlay.classList.remove("hidden");
}

// radioBtns button control
let radioValidated = true;

radioBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    radioBtns.forEach((otherBtns) => {
      otherBtns.checked = false;
      otherBtns.classList.remove("radio-checked");
    });
    e.target.checked = true;
    e.target.classList.add("radio-checked");
    radioValidated = true;
  });
});

// if payment method is not selected

function missing() {
  const isRadioChecked = Array.from(radioBtns).some((button) =>
    button.classList.contains("radio-checked")
  );
  if (!isRadioChecked) {
    paymentMissing.classList.remove("hidden");
    radioValidated = false;
  } else {
    paymentMissing.classList.add("hidden");
    radioValidated = true;
  }
}

// payment form control *****

let validPayment = true;
function validatePaymentForm() {
  validPayment = true;
  paymentInputs.forEach((input) => {
    // if the field is empty
    if (input.value.trim() === "") {
      input.nextElementSibling.classList.remove("hidden");
      input.nextElementSibling.textContent = `This fiels is required.`;
      input.style.borderColor = "rgb(238, 46, 46)";
      validPayment = false;
    } else {
      input.nextElementSibling.classList.add("hidden");
      input.style.borderColor = "#6b7280";
      validPayment = true;
    }

    // if the value is NAN
    numberInputs.forEach((item) => {
      if (!reg.test(item.value.trim())) {
        item.nextElementSibling.classList.remove("hidden");
        item.nextElementSibling.textContent = `Please enter a valid number.`;
        item.style.borderColor = "rgb(238, 46, 46)";
        validPayment = false;
      } else {
        item.nextElementSibling.classList.add("hidden");
        item.style.borderColor = "#6b7280";
        validPayment = true;
      }
    });
  });
}

// clear state

function clearState() {
  thanksModal.classList.add("hidden");
  paymentOverlay.classList.add("hidden");
  paymentInputs.textContent = "";
}

// events

confirmBtn.addEventListener("click", (e) => {
  validPayment = true;
  radioValidated = true;
  e.preventDefault();
  validatePaymentForm();
  missing();
  if (validPayment) {
    showThanks();
  }
});

closeBtn.addEventListener("click", (e) => {
  clearState();
});
