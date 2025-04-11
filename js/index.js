"use strict";

const hamburgerBtn = document.querySelector(".menu");
const menuDrop = document.querySelector(".hamburger");
const shop = document.querySelector("#shop");
const header = document.querySelector("header");
const header2 = document.querySelector(".header2");
const sendBtn = document.querySelector(".send-icon");
const subscError = document.querySelector("#subsc-error");
const emailInput = document.querySelector("#email-input");
const contactForm = document.querySelector("#contact-form");
const contactBtn = document.querySelector(".footer-contact");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const hamburgerExpanded = document.querySelector(".hamburger-expanded");
const shopLine = menuDrop.querySelector("#shop-line");

// header control

function showNewHeader() {
  header2.classList.remove("hidden");
  header.classList.add("hidden");
}

function hideNewHeader() {
  header2.classList.add("hidden");
  header.classList.remove("hidden");
}

function showDropdown() {
  menuDrop.classList.remove("hidden");
}

function hideDropdown() {
  menuDrop.classList.add("hidden");
  hamburgerExpanded.classList.add("hidden");
}

shop.addEventListener("click", (e) => {
  showNewHeader();
});

// show expanded hamburger list

function expandedHamburger() {
  menuDrop.classList.add("hidden");
  hamburgerExpanded.classList.remove("hidden");
}

shopLine.addEventListener("click", (e) => {
  expandedHamburger();
});

// Clear state & hamburger control

document.addEventListener("click", (e) => {
  if (e.target !== shop) {
    hideNewHeader();
  }
  if (e.target == hamburgerBtn) {
    if (
      menuDrop.classList.contains("hidden") &&
      hamburgerExpanded.classList.contains("hidden")
    ) {
      showDropdown();
    } else {
      hideDropdown();
    }
  }
  if (!contactForm.classList.contains("hidden")) {
    if (e.target !== contactBtn && !contactForm.contains(e.target)) {
      hideContactForm();
    }
  }
});

// email validation

function showSubscError() {
  subscError.classList.remove("hidden");
}

function hideSubscError() {
  subscError.classList.add("hidden");
}

function emailIsValid(input) {
  if (!regex.test(input.value.trim())) {
    showSubscError();
  } else {
    sendBtn.style.backgroundColor = "#EEFFEC";
    hideSubscError();
    clearEmail();
  }
}

function emptyCheck(input) {
  if (input.value === "") {
    showSubscError();
  }
}

function clearEmail() {
  emailInput.value = "";
  sendBtn.styleBackgroundColor = "#f3f4f6";
  hideSubscError();
}

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  emptyCheck(emailInput);
  emailIsValid(emailInput);
});

// contact form control

function showContactForm() {
  contactForm.classList.remove("hidden");
}

function hideContactForm() {
  contactForm.classList.add("hidden");
}

contactBtn.addEventListener("click", (e) => {
  if (e.target == contactBtn) {
    showContactForm();
  }
});

const contactInputs = contactForm.querySelectorAll("input");
const submitBtn = contactForm.querySelector("#send");
const errorMsg = contactForm.querySelector(".error");
const email = contactForm.querySelector("#email");
const textArea = contactForm.querySelector("textarea");
const thanksPop = document.querySelector("#thanks-popup");

function validateForm() {
  let formIsValid = true;

  contactInputs.forEach((input) => {
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

    // if text area is empty
    if (textArea.value.trim() === "") {
      textArea.nextElementSibling.classList.remove("hidden");
      textArea.style.borderColor = "rgb(238, 46, 46)";
      formIsValid = false;
    } else {
      textArea.nextElementSibling.classList.add("hidden");
      textArea.style.borderColor = "#e5e7eb";
    }

    // if email is invalid
    if (!regex.test(email.value.trim())) {
      email.nextElementSibling.classList.remove("hidden");
      email.nextElementSibling.textContent = `Please enter a valid Email address.`;
      email.style.borderColor = "rgb(238, 46, 46)";
      formIsValid = false;
    } else {
      email.nextElementSibling.classList.add("hidden");
      email.style.borderColor = "#e5e7eb";
    }
    if (formIsValid) {
      contactForm.classList.add("hidden");
      thanksPop.classList.remove("hidden");
    }
  });
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
});

thanksPop.addEventListener("click", (e) => {
  thanksPop.classList.add("hidden");
});
