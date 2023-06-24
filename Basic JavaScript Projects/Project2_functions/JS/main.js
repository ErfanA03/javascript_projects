function btnText() {      // Function definition //
    var str = "I have been clicked!";  // initializing variable "str" with a string value //
    document.getElementById("button_text").innerHTML = str;  // Using the "document.getElementById()" method to //
}                                                        // change the text within my button when clicked by user //




function pText() {   // Function definition //
    var str = " KEEP CLICKING ME!";    // initializing variable "str" with a string value //
    var redTxt = document.getElementById("p_text").style.backgroundColor = "red";  /* initializing variable "clrTxt" with the value of invoking
                                                                                        the document.getElementById() method and setting
                                                                                        the background color of the p element to red
                                                                                        when clicked upon by user.*/
    document.getElementById("p_text").innerHTML += str;     // When clicked the text of the p element is concatenated with the value of the "str" variable. //
}