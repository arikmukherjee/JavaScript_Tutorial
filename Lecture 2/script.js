//Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, placeat exercitationem expedita provident odio molestias vitae, qui officia quod sint iste sit. Labore doloremque excepturi dolores hic rerum voluptatum consequuntur?

/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, placeat exercitationem expedita provident odio molestias vitae, qui officia quod sint iste sit. Labore doloremque excepturi dolores hic rerum voluptatum consequuntur? */


//operators
let a = 15;
let b = 10;
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b); //15^10

console.log(a--);
console.log(a++);
++a;
console.log(a);

console.log(a == b); //false
console.log(a != b); //true

let c = 5;
let d = "5";
console.log("c==d", c == d); //true
console.log("c===d", c === d); //false
console.log("c!==d", c !== d); //true

a = 15;
b = 10;
let cond1 = a > b;
let cond2 = a === 15;
console.log("cond1 && cond2", cond1 && cond2); //true
console.log("cond1 || cond2", cond1 || cond2); //true
console.log(!(a > b)); //false


//conditional statements
let age = 25;
if (age >= 18) {
  console.log("you can vote");
}
if (age == 18) {
  console.log("you can vote");
} else {
  console.log("you can not vote");
}

let mode = "dark";
if (mode === "dark") {
  color = "black";
} else if (mode === "light") {
  color = "light";
} else {
  color = "white";
}
console.log("mode is: ", color);

mode = "dark";
if (mode === "dark") {
  color = "black";
}
if (mode === "light") {
  color = "light";
}
console.log("mode is: ", color);

let num = 10;
if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

let marks = 25;
console.log(marks >= 25 ? "passed" : "failed"); //passed

result = marks >= 25 ? "passed" : "failed";
console.log(result); //passed

marks >= 25 ? console.log("passed") : console.log("failed");


//switch case
const expr = "mangoes";
switch (expr) {
  case "mangoes":
    console.log("I am mango");
    break;
  case "orranges":
    console.log("I am an orrange");
    break;
  case "apple":
    console.log("I am an apple");
    break;
  default:
    console.log("I am not a fruit");
}

alert("You are learning JavaScript");
const Name = prompt("Enter your name");
console.log(Name);
