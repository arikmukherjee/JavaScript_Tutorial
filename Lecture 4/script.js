//Arrays in JS
let marks = [97,84,36,72];
console.log(marks);
console.log(marks.length); //4

let Name = ["Rahul", "Rohit", "Ronil"];
console.log(Name);
console.log(typeof Name); //object
console.log(Name[0]); //Rahul
Name[1] = "Raja";
console.log(Name); //Raja

//Looping in Array
for(let i=0;i<=marks.length;i++){
    console.log(marks[i]);
}

for(let mark of marks){
    console.log(mark);
}

//Array methods
//push()
marks.push("100");
console.log(marks);
//pop()
marks.pop();
console.log(marks);
let deletedVal = marks.pop();
console.log(deletedVal);
//toString()
console.log(marks.toString()); //it does not change original array
//cancat()
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
console.log(arr1.concat(arr2));
let nums = arr1.concat(arr2);
console.log(nums);
//unshift()
let alphabet = ["A","B","C","D","E","F"];
console.log(alphabet.unshift("Hello")); //"Hello","A","B","C","D","E","F"
let delval = alphabet.shift("Hello")
console.log(delval); //"A","B","C","D","E","F"
//slice()
let fruits = ["mango","apple","orrange","banana"];
console.log(fruits.slice(1)); //"apple","orrange","banana"
console.log(fruits.slice(1,2)); //"apple"
//splice()
let numArray = [1,2,3,4,5,6,7,8,9,10];
numArray.splice(2);
numArray.splice(2,2,101,102);