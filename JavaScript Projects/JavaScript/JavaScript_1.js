//SWITCH FUNCTION//
function animalFunc() {
  var output;
  var animals = document.getElementById("input").value;
  var animalStr = " are great animals!";
  switch (animals) {
    case "Dogs":
      output = "Dogs" + animalStr;
      break;
    case "Cats":
      output = "Cats" + animalStr;
      break;
    case "Monkeys":
      output = "Monkeys" + animalStr;
      break;
    case "Lions":
      output = "Lions" + animalStr;
      break;
    case "Elephants":
      output = "Elephants" + animalStr;
      break;
    case "Hamsters":
      output = "Hamsters" + animalStr;
      break;
    default:
      output = "Please enter an animal exactly as written on the above list.";
  }
  document.getElementById("output").innerHTML = output;
}

//CLASS NAMES FUNCTION//
function myFunc() {
  var A = document.getElementsByClassName("click");
  A[0].innerHTML = "I have been changed!";
}

//CANVAS ELEMENT//
const canvas = document.getElementById("ID_Name");
const context = canvas.getContext("2d");
context.moveTo(0, 0);
context.lineTo(500, 200);
context.stroke();
//END CANVAS ELEMENT//

//CANVAS ELEMENT -- GRADIENT//
const canvas2 = document.getElementById("gradient");
const ctx = canvas2.getContext("2d");

// Create a Gradient
const grd = ctx.createLinearGradient(0, 0, canvas2.width, 0); // Use canvas2.width as the ending point
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

// Draw a filled Rectangle
ctx.fillStyle = grd;
ctx.fillRect(20, 20, canvas2.width - 40, canvas2.height - 40); // Use canvas2.width and canvas2.height for the rectangle dimensions
//END CANVAS ELEMENT -- GRADIENT//
