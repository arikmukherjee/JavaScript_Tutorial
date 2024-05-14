let marks = prompt("Enter the marks");
if (marks >= 90 && marks <= 100) {
  console.log("Grade A");
  alert("You got Grade A");
} else if (marks >= 70 && marks <= 89) {
  console.log("Grade B");
  alert("You got Grade B");
} else if (marks >= 60 && marks <= 69) {
  console.log("Grade C");
  alert("You got Grade C");
} else if (marks >= 50 && marks <= 59) {
  console.log("Grade D");
  alert("You got Grade D");
} else if (marks >= 0 && marks <= 49) {
  console.log("Failed");
  alert("You have failed!");
}
