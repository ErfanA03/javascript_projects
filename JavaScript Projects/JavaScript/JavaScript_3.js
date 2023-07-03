function displayType(animal) {
  var species = animal.getAttribute("data-animal_species");
  var message = animal.innerHTML + " are part of the " + species + " species";
  document.getElementById("message").innerHTML = message;
}
