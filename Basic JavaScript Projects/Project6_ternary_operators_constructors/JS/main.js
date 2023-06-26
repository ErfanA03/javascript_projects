function canVote() {
  var age, canVote;
  age = document.getElementById("age").value;
  canVote =
    age < 18 ? "You are too young to vote" : "You are old enough to vote";
  document.getElementById("canVote").innerHTML = canVote;
}
