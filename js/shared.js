"use strict";

const hamburgerMenu = document.querySelector(".menu");
const menuDrop = document.querySelector(".hamburger");
const shop = document.querySelector("#shop");
const header = document.querySelector("header");
const header2 = document.querySelector(".header2");
const contactForm = document.querySelector("#contact-form");
const contactBtn = document.querySelector(".footer-contact");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
}

shop.addEventListener("click", (e) => {
  showNewHeader();
});

// Clear state - document click

document.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target !== shop) {
    hideNewHeader();
  }
  if (e.target !== hamburgerMenu) {
    hideDropdown();
  }
  if (!contactForm.classList.contains("hidden")) {
    if (e.target !== contactBtn && !contactForm.contains(e.target)) {
      hideContactForm();
    }
  }
});

hamburgerMenu.addEventListener("click", (e) => {
  showDropdown();
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
