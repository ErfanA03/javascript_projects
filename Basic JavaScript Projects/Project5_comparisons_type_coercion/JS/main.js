//Function Section -----------------------------//
function typeFunc() {
  document.write(typeof 33); //Declared a function and are displaying to the document(HTML) what the typeof of the number 33 is.//
}

function typeCoercion() {
  document.getElementById("coercion").innerHTML = "10" + 5; //Declared a function and are changing the specified element's inner text to the concatenated value of "10" + 5.//
}

function nanFunc() {
  document.getElementById("nan").innerHTML = 0 / 0; //Declared a function and are changing the specified element's inner text to the value of 0 / 0 -- which is NaN.//
}

function isNanTrue() {
  document.getElementById("isnanTrue").innerHTML = isNaN("Hello"); //Declared a function and are changing the specified element's inner text to the value of using the isNaN function to return a boolean value.//
}

function isNanFalse() {
  document.getElementById("isnanFalse").innerHTML = isNaN("33"); //Declared a function and are changing the specified element's inner text to the value of using the isNan function to return a boolean value.//
}

function infinity() {
  document.getElementById("infinity").innerHTML = 2e310; //Declared a function and are changing the specified element's inner text to the value of infinity.//
}

function neginf() {
  document.getElementById("neginfinity").innerHTML = -3e310; //Declared a function and are changing the specified element's inner text to the value of negative infinity.//
}

function lessThan() {
  document.getElementById("lessThan").innerHTML = 3 < 5; //Declared a function and are changing the specified element's inner text to the returned value of 3 < 5.//
}

function greaterThan() {
  document.getElementById("greaterThan").innerHTML = 4 > 10; //Declared a function and are changing the specified element's inner text to the returned value of 4 > 10.//
  console.log("HI!");
}

function notFunc() {
  document.getElementById("not").innerHTML = !(5 > 10); //Declared a function and are changing the specified element's inner text to the returned value of using the not operator on (5 > 10).//
}

//Console.log Section----------------------------//
//Most of these are self-explanatory//
console.log(10 + 90);

console.log(11 > 15);

console.log(10 == "10");

console.log(10 == 3);

console.log(10 === 10);

console.log(10 === "8");

console.log(10 === "10");

console.log(10 === 8);

console.log(true && false);

console.log(true || false);
