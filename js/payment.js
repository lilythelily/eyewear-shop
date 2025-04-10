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
const closeBtn = document.querySelector('#close');

// radioBtns button control

radioBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    radioBtns.forEach((otherBtns) => {
      otherBtns.checked = false;
      otherBtns.classList.remove("radio-checked");
    });
    e.target.checked = true;
    e.target.classList.add("radio-checked");
  });
});

// if payment method is not selected

function missing() {
  const isRadioChecked = Array.from(radioBtns).some((button) =>
    button.classList.contains("radio-checked")
  );
  if (!isRadioChecked) {
    paymentMissing.classList.remove("hidden");
  } else {
    paymentMissing.classList.add("hidden");
  }
}

// peyment form control *****

function validatePaymentForm() {
  let validPayment = true;

  paymentInputs.forEach((input) => {
    let isValidPayment = true;
    // if the field is empty
    if (input.value.trim() === "") {
      input.nextElementSibling.classList.remove("hidden");
      input.nextElementSibling.textContent = `This fiels is required.`;
      input.style.borderColor = "rgb(238, 46, 46)";
      isValidPayment = false;
      validPayment = false;
    } else {
      input.nextElementSibling.classList.add("hidden");
      input.style.borderColor = "#6b7280";
    }

    // if the value is NAN
    numberInputs.forEach((item) => {
      if (!reg.test(item.value.trim())) {
        item.nextElementSibling.classList.remove("hidden");
        item.nextElementSibling.textContent = `Please enter a valid number.`;
        item.style.borderColor = "rgb(238, 46, 46)";
        isValidPayment = false;
        validPayment = false;
      } else {
        item.nextElementSibling.classList.add("hidden");
        item.style.borderColor = "#6b7280";
      }
      if (validPayment) {
        thanksModal.classList.remove("hidden");
        paymentOverlay.classList.remove("hidden");
      }
    });
  });
}

// clear state

function clearState() {
    thanksModal.classList.add('hidden');
    paymentOverlay.classList.add('hidden');
    paymentInputs.textContent = '';
}


confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validatePaymentForm();
  missing();
});

closeBtn.addEventListener('click', (e) => {
    clearState();
})



// function validateForm() {
//   let formIsValid = true;

//   contactInputs.forEach((input) => {
//     let isValid = true;
//     // if input fields are empty
//     if (input.value.trim() === "") {
//       input.nextElementSibling.classList.remove("hidden");
//       input.nextElementSibling.textContent = `This field is required.`;
//       input.style.borderColor = "rgb(238, 46, 46)";
//       isValid = false;
//       formIsValid = false;
//     } else {
//       input.nextElementSibling.classList.add("hidden");
//       input.style.borderColor = "#e5e7eb";
//     }

//     // if text area is empty
//     if (textArea.value.trim() === "") {
//       textArea.nextElementSibling.classList.remove("hidden");
//       textArea.style.borderColor = "rgb(238, 46, 46)";
//       formIsValid = false;
//     } else {
//       textArea.nextElementSibling.classList.add("hidden");
//       textArea.style.borderColor = "#e5e7eb";
//     }

//     // if email is invalid
//     if (!regex.test(email.value.trim())) {
//       email.nextElementSibling.classList.remove("hidden");
//       email.nextElementSibling.textContent = `Please enter a valid Email address.`;
//       email.style.borderColor = "rgb(238, 46, 46)";
//       formIsValid = false;
//     } else {
//       email.nextElementSibling.classList.add("hidden");
//       email.style.borderColor = "#e5e7eb";
//     }
//     if (formIsValid) {
//       contactForm.classList.add("hidden");
//       thanksPop.classList.remove("hidden");
//     }
//   });
// }

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   validateForm();
// });

// thanksPop.addEventListener("click", (e) => {
//   thanksPop.classList.add("hidden");
// });
