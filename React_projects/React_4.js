window.addEventListener("load", function () {
  var elementsToFade = document.querySelectorAll(".fade-in");

  elementsToFade.forEach(function (element) {
    element.style.animationDelay = getComputedStyle(element).animationDelay;
    element.classList.add("show");
  });
});

function validateForm() {
  let a = document.forms["myForm"]["fname"].value;
  let b = document.forms["myForm"]["lname"].value;
  let c = document.forms["myForm"]["email"].value;
  if (a == "" || b == "") {
    alert("Name must be filled out!");
    return false;
  } else if (c == "") {
    alert("Email must be filled out!");
    return false;
  }
}

var contactButton = document.getElementById("contactButton");
var contactFormPopup = document.getElementById("contactFormPopup");
var contactForm = document.getElementById("contactForm");

contactButton.addEventListener("click", function () {
  contactFormPopup.classList.toggle("show");
});

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // Handle form submission logic here (e.g., send an email)
  // After submitting the form, you can hide the popup using:
  // contactFormPopup.classList.remove("show");
});
