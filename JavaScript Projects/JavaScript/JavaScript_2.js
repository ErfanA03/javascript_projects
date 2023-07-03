function validateForm() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;

  if (fname === "") {
    alert("Please enter your first name.");
    return false;
  }

  if (fname === "") {
    alert("Please enter your last name.");
    return false;
  }
}

//Event listener//
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); //Prevent the default form submission

  validateForm(); //Call the vailidation function
});
