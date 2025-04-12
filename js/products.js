"use strict";

// Get the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("product");


//  A list of products

const products = {
  "AFS-25B": {
    name: "Popsicle",
    number: "AFS-25B",
    price: "230",
    img: "/assets/eyeglasses-red.png",
  },
  "JSX-162": {
    name: "Maron",
    number: "JSX-162",
    price: "228",
    img: "/assets/eyeglasses-maron.png",
  },
  "MGR-42S": {
    name: "Growing",
    number: "MGR-42S",
    price: "250",
    img: "/assets/eyeglasses-green-square.png",
  },
  "DNT-65Q": {
    name: "Midnight",
    number: "DNT-65Q",
    price: "256",
    img: "/assets/eyeglasses-navy.png",
  },
  // "SLV-51T": {
  //   name: "Silver Star",
  //   number: "SLV-51T",
  //   price: "280",
  //   img: "/assets/eyeglasses-silver.png",
  // },
  // "CMC-63M": {
  //   name: "Comic",
  //   number: "CMC-63M",
  //   price: "230",
  //   img: "/assets/eyeglasses-navy-round.png",
  // },
  // "XSS-72G": {
  //   name: "Classy",
  //   number: "XSS-72G",
  //   price: "260",
  //   img: "/assets/eyeglasses-black-square.png",
  // },


  // gents


  "CMT-18C": {
    name: "Chemist",
    number: "CMT-18C",
    price: "270",
    img: "../assets/mens-eye1.png",
  },
  "PRF-27C": {
    name: "Professor",
    number: "PRF-27C",
    price: "250",
    img: "../assets/mens-eye2.png",
  },
  "MBR-19T": {
    name: "Amber",
    number: "MBR-19T",
    price: "210",
    img: "../assets/eyeglasses-brown-square.png",
  },
  "ICY-45P": {
    name: "Ict",
    number: "ICY-45P",
    price: "220",
    img: "../assets/Untitled.png",
  },
};



// Update product details
if (productId) {
  const product = products[productId];
  if (product) {
    document.querySelector("#cart-img").src = product.img;
    document.querySelector(".product-name").textContent = product.name;
    document.querySelector(".product-number").textContent = product.number;
    document.querySelector(".product-price").textContent = product.price;
  }
}
