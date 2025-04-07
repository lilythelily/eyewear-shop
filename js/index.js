"use strict";

const hamburgerMenu = document.querySelector(".menu");
const menuDrop = document.querySelector(".hamburger");
const shop = document.querySelector("#shop");
const header = document.querySelector("header");
const header2 = document.querySelector(".header2");
const sendBtn = document.querySelector(".send-icon");
const subscError = document.querySelector(".subsc-error");

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

document.addEventListener("click", (e) => {
  if (e.target !== shop) {
    hideNewHeader();
  }
  if (e.target !== hamburgerMenu) {
    hideDropdown();
  }
});

hamburgerMenu.addEventListener("click", (e) => {
  showDropdown();
});

// email validation

function showSubscError() {
  subscError.classList.remove("hidden");
}

// start from REGEX (8 APr)

function emailIsValid() {
  const regex = "/^((?!.)[w-_.]*[^.])(@w+)(.w+(.w+)?[^.W])$/gim;";
}

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("sent");
});
