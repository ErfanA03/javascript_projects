function concatFunc() {
  var part_1 = "I love ";
  var part_2 = "to eat "; //Function that concatenates different string variables using the concat() method.
  var part_3 = "ice cream!";
  var wholeSent = part_1.concat(part_2, part_3);
  document.getElementById("concat").innerHTML = wholeSent;
}

function sliceFunc() {
  var sent = "Bueller ... Bueller ... Bueller."; //Function that sets the inner text of the specified html element to the sliced string "sent", using the slice() method, which returns a new string.
  var section = sent.slice(0, 11);
  document.getElementById("slice").innerHTML = section;
}

function upperFunc() {
  document.getElementById("upper").innerHTML = "i love swimming!".toUpperCase(); //Function that upper cases the string by using the toUpperCase() method.
}

function searchFunc() {
  var sentence = document.getElementById("label").innerHTML; //Function that searches the string for a value and returns the index of the first occurence of that value.
  var input = document.getElementById("search").value;
  if (sentence.search(input) === -1) {
    document.getElementById("result").innerHTML =
      "The data you entered did not match any value in the string.";
  } else if (
    sentence.search(input) > -1 &&
    sentence.search(input) < sentence.length - 1
  ) {
    document.getElementById("result").innerHTML = sentence.search(input);
  }
}

function stringFunc() {
  var x = 900;
  document.getElementById("numToString").innerHTML = //Function that changes a value of the "number" type to the "string" type equivalent of that value.
    x.toString() +
    ', to prove this is a string type, the text after the colon is the typeof "x.toString()" written in my .js file : ' +
    typeof x.toString();
}

function precFunc() {
  var x = 12938.9394853090439029; //Function that utilizes the toPrecision() method which simply, takes in a single argument that controls the precision or number of decimal places in a numerical value.
  document.getElementById("precision").innerHTML = x.toPrecision(2);
}
