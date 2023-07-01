//WHILE LOOP FUNCTION//
//Function that counts down from the entered number by 1 until it reaches the number 0.
function loopFunc() {
  var digit = "";
  var i = document.getElementById("input").value;
  while (i >= 0) {
    digit += "<br>" + i;
    i--;
  }
  document.getElementById("length_text").innerHTML = digit;
}

//LENGTH FUNCTION//
//Function that loops through the array of the collected elements and pushes each one into the "result" array and then displays it.
function lengthFunc() {
  var elements = document.getElementsByClassName("length");
  var result = [];
  for (let i = 0; i < elements.length; i++) {
    result.push(elements[i].innerHTML);
  }
  document.getElementById(
    "name_array"
  ).innerHTML = `This is an array containing all three names listed above: ${result}`;
}

//FOR LOOP FUNCTION//
//Function that loops through the array "sports" and displays them.
function forLoop() {
  var sports = ["Basketball", "Football", "Soccer", "Tennis", "Boxing"];
  var content = "";
  for (let i = 0; i < sports.length; i++) {
    content += sports[i] + "<br>";
  }
  document.getElementById("list").innerHTML = content;
}

//ARRAY FUNCTION//
//Function that creates an empty "vowels" array that then creates values for the array by using the index of that array. The function then loops through the now-filled array and keeps adding onto the "arrText" variable that contains the values of the array. It then displays the values and a string.
function arrFunc() {
  var vowels = [];
  vowels[0] = "Wake up, ";
  vowels[1] = "eat, ";
  vowels[2] = "code, ";
  vowels[3] = "sleep.";
  var arrText = "";
  var text = "A normal day for me goes like this: ";
  for (let i = 0; i < vowels.length; i++) {
    arrText += vowels[i];
  }
  document.getElementById("array").innerHTML = text + arrText;
}

//CONST FUNCTION//
const myObj = {
  //Created an object that contains info about me.
  name: "Erfan ",
  age: 19,
  lovesToDo: ["coding", "sleeping", "drawing", "reading", "hiking"],
  hatesHeights: true,
};

function constFunc() {
  //Function that displays the value of the name property in my object which is my first name, after I change the name property to my full name, then I create a new property with a value, and finally I reassign the innerHTML of my "constant" element to the now changed "myObj.name" property and the newly created "myObj.zodiacSign" property.
  document.getElementById("constant").innerHTML = myObj.name;
  let name = (myObj.name = "Erfan Arsin ");
  let sign = (myObj.zodiacSign = "libra");
  document.getElementById("constant").innerHTML += name + sign;
}

//RETURN FUNCTION//
const returnFunc = () => {
  //Function that returns the value "I just got returned" to the "return" element.
  return (document.getElementById("return").innerHTML = "I just got returned!");
};

//LET FUNCTION//
function letFunc() {
  //Function that creates a dog object with properties and methods.
  let dogObj = {
    color: "brown",
    breed: "German Shepherd",
    lifeExpectancy: "9 - 13 years",
    bark: function () {
      return `I have a ${this.color} ${this.breed} that lives around ${this.lifeExpectancy}`;
    },
  };
  document.getElementById("dogObj").innerHTML = dogObj.bark(); //Here we are changing the innerHTML of the element with the id, "dogObj" to the value of calling the ".bark()" method from the "dogObj" object.
}

//BREAK FUNCTION//
//Function that creates a while loop that logs to the console the value of "i" until "i" reaches the value of 5, which then causes it to display the string below and exit the loop.
function breakFunc() {
  let i = 1;

  while (i <= 10) {
    if (i === 5) {
      console.log("Reached the break statement. Exiting the loop.");
      break;
    }
    console.log(i);
    i++;
  }
}

//CONTINUE FUNCTION//
function contFunc() {
  //Function that creates a for loop that logs to the console the value of "i" unless "i" is an odd number at which point it displays to the console that the number is odd so it will skip it.
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 1) {
      console.log(`This number is a odd number so I will skip it: ${i}`);
      continue;
    }
    console.log(i);
  }
}
