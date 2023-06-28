//TIMER FUNCTIONS-------------------------------//
function countdown() {
  var seconds = document.getElementById("seconds").value;

  function tick() {
    seconds = seconds - 1;
    timer.innerHTML = seconds;
    var time = setTimeout(tick, 1000);
    if (seconds == -1) {
      alert("Time's up!");
      clearTimeout(time);
      timer.innerHTML = "";
    }
  }
  tick();
}
//END TIMER FUNCTIONS---------------------------//

//SLIDESHOW FUNCTIONS---------------------------//
let slideIndex = 1; // Initializes a variable, "slideIndex" with a value of 1, which represents the current slide being displayed.
showSlides(slideIndex); //Calls the showSlides function with the initial slideIndex value to display the first slide.

// Next/previous controls
function plusSlides(n) {
  //Defines a function, "plusSlides" that takes a parameter "n". This function is responsible for navigating to the next or previous slide based on the value of "n".
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  //Defines a function, "currentSlide" that takes a parameter "n". This function is responsible for navigating to a specific slide based on the value of "n". It is used for when the user clicks on the dots and it redirects them to the correct image.
  showSlides((slideIndex = n));
}

//Defines the main function, "showSlides" that takes a parameter "n". This function is responsible for displaying the slides based on the provided index "n".
function showSlides(n) {
  let i;
  //Retrieves all elements with the class name "mySlides" and stores them in the "slides" variable. These elements represent the individual slides in the slideshow.
  let slides = document.getElementsByClassName("mySlides");
  //Retrieves all elements with the class name "dot" and stores them in the "dots" variable. These elements represent the navigation dots or indicators associated with each slide.
  let dots = document.getElementsByClassName("dot");
  //Checks if the provided index n is greater than the total number of slides. If true, it sets slideIndex to 1, indicating the first slide should be displayed.
  if (n > slides.length) {
    slideIndex = 1;
  }
  //Checks if the provided index n is less than 1. If true, it sets slideIndex to the total number of slides, indicating the last slide should be displayed.
  if (n < 1) {
    slideIndex = slides.length;
  }
  //Iterates over all slides and sets their display property to "none", hiding them from view.
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //Iterates over all navigation dots and removes the "active" class from their className, removing the active styling.
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //Displays the slide corresponding to the current slideIndex by setting its display property to "block", making it visible.
  slides[slideIndex - 1].style.display = "block";
  //Adds the "active" class to the dot associated with the current slide, applying the active styling.
  dots[slideIndex - 1].className += " active";
}
//END SLIDESHOW FUNCTIONS-----------------------//
