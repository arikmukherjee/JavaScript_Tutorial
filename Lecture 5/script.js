//Funtion in JS
function myFunction() {
  console.log("Welcome to JS Tutorial.");
  console.log("We are learning JS.");
}
myFunction();

function myFunction(msg) {
  //parameter
  console.log(msg);
}
myFunction("JS"); //argument

function sum(a, b) {
  console.log(a * b);
}
sum(30, 55);

function sum(a, b) {
  s = a + b;
  return s;
}
sum(30, 55);

//Arrow Function
const arrowSum = (a, b) => {
  console.log(a + b);
};
arrowSum(2, 4);

const printHello = () => {
  console.log("Hello");
};
printHello();

//forEach loops in Arrays
//forEach takes the value from the array and passes it as a parameter like 'val' to the function.
//Here we can pass function as a parameter.
//It is a HIGHER ORDER FUNCTION.
let arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function printValue(val) {
  console.log(val); //1 2 3 4 5 6
});

arr.forEach((val) => {
  console.log(val); //1 2 3 4 5 6
});

arr.forEach((val, idx, arr) => {
  console.log(val, idx, arr);
});

//Map method in Array
//It creates a new array.
let numbers = [10, 20, 30, 40, 50, 60, 70];
numbers.map((val) => {
  console.log(val);
});

let nums = [10, 20, 30, 40, 50, 60, 70];
let newArray = nums.map((val) => {
  return val * val;
});
console.log(newArray);

//filter method in Array
let a = [1, 2, 3, 4, 5, 6, 7];
let evenArray = a.filter((val) => {
  return val % 2 == 0;
});
console.log(evenArray);

//Reduce method in Array
let myArray = [1, 2, 3, 4, 5, 6, 7];
const output = myArray.reduce((result, currentValue) => {
  return result + currentValue;
});
console.log(output); //1+2+3+4+5+6+7=76
