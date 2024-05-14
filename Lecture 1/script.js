//printing using JS
//console.log("Hello, World!");
//alert("Hello Arik..");

//variables in JS
// age = 24;
// console.log(age);
// fullName = "Arik Mukherjee";
// console.log(fullName);
// price = 99.99;
// console.log(price);

// x = null;
// console.log(x);
// y = undefined;
// console.log(y);

// isFollow = true;
// console.log(isFollow);

// fullName = 25;
// console.log(fullName);

// a = "Hello JS";
// A = "Hello JS";
// console.log(a, A); // JS is case sensitive.

// _fullName = "ARIK MUKHERJEE";
// $fullName = "ARIK MUKHERJEE";
//console.log(_fullName); //valid
//console.log($fullName); //valid

// console = "arik";
// console.log(console); //invalid

// full_Name = 456;
// console.log(full_Name); //undefined

// let full_Name = 456;
// console.log(full_Name);

//We should not use 'var'. It was used before 2015. There are many problems in 'var'. Like , we can re-declare variables using 'var'.
// var a=15;
// var a=20;
// We shall only use 'let' & 'const'.

// let a = 5;
// console.log(a);

// const pi = 3.14; // this is constant.
// console.log(pi);
//pi=153; // Error

//BLOCK OR SCOPE
// {
//   let a = 10;
//   console.log(a);//10
// }

// {
//   let a = 20;
//   console.log(a);//20
// }


age = 45;
console.log(age);
typeof(age);
console.log(typeof(age));

const student = {
    Name:"Arik Mukherjee",
    age:21,
    cgpa:9.77,
    isPass:true
}
console.log(student); // Output = { Name:"Arik Mukherjee", age:21, cgpa:9.77, isPass:true }

//HOW TO ACCESS KEYS FROM OBJECT ?
console.log(student["Name"]); // Output = Arik Mukherjee
console.log(student.Name); // Output = Arik Mukherjee

student["age"] = student["age"] + 1 ;
console.log(student["age"]); // Output = 22