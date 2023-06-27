// Global Scope ---------------
var x = 100;
function add2() {
  console.log(x + 2);
}
// Local / Function Scope ---------------------------
function add4() {
  var x = 20;
  console.log(x + 4); //Since we initialized a new variable, "x" within our function, we get the number 24 logged to our console. If for instance you comment out the "var x = 20" line, save and reload, you will get the number 104 logged to the console.
}

function add6() {
  var b = 40; //Intentionally producing an error and logging it within the console so that I can debug it easier.
  console.log(c);
}

//Date().getHours() Method----- //Function that checks whether the time is less than (before) 18 or 6:00 p.m., if it is, it will display a greeting.
function methodFunc() {
  if (new Date().getHours() < 18) {
    document.getElementById("method").innerHTML = "How are you today?";
  }
}

function if_Func() {
  //Function that validates that the user is "Erfan"//
  if (
    document.getElementById("name").value === "Erfan" ||
    document.getElementById("name").value === "Erfan Arsin"
  ) {
    document.getElementById("name_text").innerHTML = "Welcome, Erfan!";
  } else {
    document.getElementById("name_text").innerHTML =
      "You are not Erfan, you do not have access to these files...";
  }
}

function timeFunc() {
  //Function that gets the current time from the computer and depending on the condition, it will display different messages.
  var time = new Date().getHours();
  var reply;
  if (time < 12 == time > 0) {
    reply = "It is morning time!";
  } else if (time >= 12 == time < 18) {
    reply = "It is afternoon!";
  } else {
    reply = "It is evening time!";
  }
  document.getElementById("time").innerHTML = reply;
}
