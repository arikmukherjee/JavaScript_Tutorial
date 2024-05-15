//for loop
for(i=0;i<5;i++){
    console.log("Arik");
}

//calculate the sum of 1 to 5
let sum = 0 , n=5;
for(i=1;i<=n;i++){
    sum  = sum  + i;
}
console.log("sum =",sum);
 //print i
for(i=1;i<=5;i++){
    console.log(i);
}

//infinite loop
// for(i=1;i>=0;i++){
//     console.log(i);
// }

//while loop
let count=0;
while(count<=5){
    console.log(count);
    count++;
}

//do-while loop
let c=1;
do{
    console.log("It is JS");
    c++;
}while(c<=5);

//for-of loop ( This is used in Strings and Arrays)
let str="JAVASCRIPT";
for(let i of str) {
    console.log("i =",i);
}

let length=0;
for(let l of str) {
    console.log("l =",l);
    length++;
}
console.log(length);//10

//for-in loop (it is used in object)
let student = {
    Name: "rahul",
    age: 20,
    cgpa: 7.5,
    isPass: true, 
};
for (let key in student) {
    console.log("key =",key); //it will return key.
    console.log("value =",student[key]);
}

//strings
let s1 = "JavaScript";
console.log(s1.length);
console.log(s1[8]);
console.log(s1[0]);

//template literals

let specialString = `This is a template literal`;
console.log(specialString);

let obj = {
    item: "pen",
    price: 10,
}

console.log("the cost of", obj.item, "is" , obj.price, "rupees");
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

let str1 = "Hello\nworld"; // "Hello" then in new line "world" will be printed
console.log(str1);
let str2 = "Hello\tworld";
console.log(str2); // Hello world
console.log(str2.length); //11
let str3 = "Hello World";
console.log(str3.toUpperCase()); //HELLO WORLD
console.log(str3.toLowerCase()); //hello world
let str4 = "          hello world";
console.log(str4.trim()); //hello world
let str5 = "hello";
console.log(str5.slice(1,3)); //el
console.log(str5.slice(1)); //ello
let str6 = "world";
console.log(str5.concat(str6)); //helloworld
console.log(str5+str6); //helloworld
let str7 = "JAVA";
console.log(str7.replace("J","N")); //NAVA
console.log(str7.charAt(0)); //J