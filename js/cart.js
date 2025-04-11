"use strict";

const cartSection = document.querySelector("aside");
const cartImg = document.querySelector("#cart-img");
const counter = document.querySelector("#main-counter");
const caretDown = document.querySelector("#carret-down");
const caretUp = document.querySelector("#carret-up");
const cartQtyDisplay = document.querySelector("#main-qty");
const addBtn = document.querySelector("#add-cart");

const cart = document.querySelector("#cart");
const cartLine = document.querySelector(".left-items");
const itemQtyDisplay = document.querySelector(".item-qty");
const price = document.querySelector("#price");
const totalAmountDisplay = document.querySelector("#total-amount");
const removeBtn = document.querySelector("#trash");

const checkoutBtn = document.querySelector("#check-out");
const orderSummary = document.querySelector("#order-summary");
const shippingSection = document.querySelector("#wrapper");
const continueText = document.querySelector("#continue");

let cartQty = 1;
let currentPrice = parseFloat(price.textContent);

function updateCartQtyDisplay() {
  cartQtyDisplay.textContent = cartQty;
}

// cart quantity control

function increment() {
  cartQty++;
  updateCartQtyDisplay();
}

function decrement() {
  if (cartQty > 1) {
    cartQty--;
    updateCartQtyDisplay();
  }
}

caretDown.addEventListener("click", (e) => {
  decrement();
});

caretUp.addEventListener("click", (e) => {
  increment();
});

updateCartQtyDisplay();

// calculate total

function updateTotal() {
  itemQtyDisplay.textContent = cartQty;
  const currentTotalAmount = currentPrice * cartQty;
  totalAmountDisplay.textContent = `USD ${currentTotalAmount}`;
}

addBtn.addEventListener("click", (e) => {
  cart.classList.remove("hidden");
  updateTotal();
  cartLine.style.opacity = 1;
});

// remove item

removeBtn.addEventListener("click", (e) => {
  cartLine.style.opacity = 0;
  totalAmountDisplay.textContent = "0";
});

// order summary

function checkoutState() {
  cartSection.classList.add("hidden");
  orderSummary.classList.remove("hidden");
  checkoutBtn.style.opacity = 0;
  cartImg.classList.add("hidden");
  shippingSection.classList.remove("hidden");
  continueText.style.opacity = 0;
}

checkoutBtn.addEventListener("click", (e) => {
  checkoutState();
});

// shipping address validation

const shippingForm = document.querySelector("#shipping-form");
const shippingInputs = shippingForm.querySelectorAll("input");
// const errorMsg = shippingForm.querySelector("small");
const shippingEmail = shippingForm.querySelector("#shipping-email");
const shippingTel = shippingForm.querySelector("#tel");
const zip = shippingForm.querySelector("#zip");
const proceedBtn = document.querySelector("#proceed");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
const zipRegex = /^([1-9]{1,8})$/;

function validateShippingForm() {
  let formIsValid = true;

  shippingInputs.forEach((input) => {
    let isValid = true;

    // if input fields are empty
    if (input.value.trim() === "") {
      input.nextElementSibling.classList.remove("hidden");
      input.nextElementSibling.textContent = `This field is required.`;
      input.style.borderColor = "rgb(238, 46, 46)";
      isValid = false;
      formIsValid = false;
    } else {
      input.nextElementSibling.classList.add("hidden");
      input.style.borderColor = "#e5e7eb";
    }

    // if tel number is NAN
    if (!telRegex.test(shippingTel.value.trim())) {
      shippingTel.nextElementSibling.classList.remove("hidden");
      shippingTel.nextElementSibling.textContent = `Please enter a valid number.`;
      shippingTel.style.borderColor = "rgb(238, 46, 46)";
      isValid = false;
      formIsValid = false;
    } else {
      shippingTel.nextElementSibling.classList.add("hidden");
      shippingTel.style.borderColor = "#e5e7eb";
    }

    // if email is invalid
    if (!emailRegex.test(shippingEmail.value.trim())) {
      shippingEmail.nextElementSibling.classList.remove("hidden");
      shippingEmail.nextElementSibling.textContent = `Please enter a valid Email address.`;
      shippingEmail.style.borderColor = "rgb(238, 46, 46)";
      formIsValid = false;
    } else {
      shippingEmail.nextElementSibling.classList.add("hidden");
      shippingEmail.style.borderColor = "#e5e7eb";
    }

    // if zip code is invalid
    if (!zipRegex.test(zip.value.trim())) {
      zip.nextElementSibling.classList.remove("hidden");
      zip.nextElementSibling.textContent = `Please enter a valid number.`;
      zip.style.borderColor = "rgb(238, 46, 46)";
      isValid = false;
      formIsValid = false;
    } else {
      zip.nextElementSibling.classList.add("hidden");
      zip.style.borderColor = "#e5e7eb";
    }

    if (formIsValid) {
      ("");
    }
  });
}

proceedBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateShippingForm();
});
