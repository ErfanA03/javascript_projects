//Function definition
function myDictionary() {
  //Initialized variable "Car" with value of an object
  let Car = {
    Engine: "Gasoline",
    Make: "Ford",
    Model: "Focus",
    Color: "Silver",
    Year: 2017,
  };
  delete Car.Make; //Deleted the property "Make" off of the "Car" object
  document.getElementById("Dictionary").innerHTML = Car.Make; //Changes the inner text of the element with the id of "Dictionary" to the value of the "Make" property of the "Car" object.
}
