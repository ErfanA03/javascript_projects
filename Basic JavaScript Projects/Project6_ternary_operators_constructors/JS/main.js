function rideFunc() {
  var age, can_Vote;
  age = document.getElementById("age").value;
  can_Vote =
    age < 18 ? "You are not old enough to vote" : "You are old enough to vote"; //Function that checkes whether or not one is over the age of 18 and displays text saying whethere the user is or not.//
  document.getElementById("age_text").innerHTML = can_Vote;
}

function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model; //Function constructor
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //Creating new instances of the Vehicle class and giving them arguments for the parameters.
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML = //Using a function to display to the element with the id of "Keywords_and_Constructors" when clicked upon.
    "Erik drives a " +
    Erik.Vehicle_Color +
    "-colored " +
    Erik.Vehicle_Model +
    " manufactured in " +
    Erik.Vehicle_Year;
}

function nestedFunc() {
  document.getElementById("Nested_Function").innerHTML = greeting(); //Demonstrating the use of nested function -- Functions that are inside other functions. Here I am defining a "nestedFunc()" function and calling the "greeting()"" function with the "return" keyword which then returns the value of invoking the "nestedGreeting()" function which is "HELLO, WORLD!" to the outer function which is greeting() and then "greeting()" itself gets return to where it was called, from there the value is stored as the innerHTML for the element.)
  function greeting() {
    function nestedGreeting() {
      return "HELLO, WORLD!";
    }
    return nestedGreeting();
  }
}
