"use strict";

const button = document.getElementById("consult-button");
const contact = document.getElementById("contact");
button.addEventListener("click", function () {
  contact.scrollIntoView({ behavior: "smooth" });
});
