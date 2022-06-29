"use strict";

const button = document.getElementById("consult-button");
const contact = document.getElementById("contact");
button.addEventListener("click", function () {
  contact.scrollIntoView({ behavior: "smooth" });
});

// For sticky navbar
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
