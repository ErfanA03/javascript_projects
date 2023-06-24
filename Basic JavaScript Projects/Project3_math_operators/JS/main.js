function addNum() {
  let num1 = Number(window.prompt("Enter a number to add:"));
  let num2 = Number(window.prompt("Enter another number to add to the first number:"));              // This function is responsible for adding //
  document.getElementById("add").innerHTML = num1 + num2;
}

function subNum() {
  var num1 = Number(window.prompt("Enter a number to subtract:"));
  var num2 = Number(window.prompt("Enter another number to subtract from the first number:"));      // This function is responsible for subtracting //
  document.getElementById("subtract").innerHTML = num1 - num2;
}

function multNum() {
  var num1 = Number(window.prompt("Enter a number to multiply:"));
  var num2 = Number(window.prompt("Enter another number to multiply from the first number:"));       // This function is responsible for multiplying //
  document.getElementById("multiply").innerHTML = num1 * num2;
}

function divNum() {
  var num1 = Number(window.prompt("Enter a number to divide:"));
  var num2 = Number(window.prompt("Enter another number to divide from the first number:"));       // This function is responsible for dividing //
  document.getElementById("divide").innerHTML = num1 / num2;
}

function multiOps() {
  var simple_Math = (10 + 5) * 100 / 50 - 25;
  document.getElementById("multi_operators").innerHTML = "10 plus 5, multiplied by 100, divided by 50 and then subtracted by 25 equals " + simple_Math;    // This function is responsible for showing multiple operations in place when clicked upon. //
}

function modFunc() {
  var num1 = Number(window.prompt("Enter a number:"));
  var num2 = Number(window.prompt("Enter another number to divide from the first number and see the remainder:"));  // This function is responsible for displaying the remainder from dividing both numbers. //
  document.getElementById("modulus").innerHTML = num1 % num2;
}

function negateFunc() {
  var result = Number(window.prompt("Enter a number and I'll display it in negative form:"));    // This function is responsible for negating the entered number //
  document.getElementById("negate").innerHTML = -result;
}

function incrementFunc() {
  var result = Number(window.prompt("Enter a number and I'll increment it by 1:"));     // This function is responsible for incrementing given number by 1 //
  document.getElementById("increment").innerHTML = ++result;
}

function decrementFunc() {
  var result = Number(window.prompt("Enter a number and I'll decrement it by 1:"));    // This function is responsible for decrementing given number by 1 //
  document.getElementById("decrement").innerHTML = --result;
}

function mathRand() {
  document.getElementById("rndm").innerHTML = Math.floor(Math.random() * 101);  // This function is responsible for displaying a random integer between 0 and 100 //
}
