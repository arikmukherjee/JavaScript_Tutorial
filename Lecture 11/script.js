//PROTOTYPE IN JS
// const emp = {
//     calTax() {
//         console.log("tax rate is 10%");
//     }
// }
// console.log(emp.calTax());

const emp = {
  calTax: function () {
    console.log("tax rate is 10%");
  },
};
console.log(emp.calTax());

const karanArjun = {
  salary: 5000,
};
karanArjun.__proto__ = emp;
console.log(karanArjun.calTax());


//CLASS AND OBJECT IN JS
class Car {
  constructor(brand) {
    console.log("New obj created");
    this.brand=brand;
  }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
}

let fortuner = new Car(); //New obj created
fortuner.start(); //start
let lexus = new Car("Hello"); //New obj created

//INHERITANCE IN JS
class Parent{
    hello(){
        console.log("hello")
    }
}
class Child extends Parent {

}
let obj = new Child();
console.log(obj.hello());

class Person {
    constructor(){
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
    }
}

class Engineer extends Person{
    constructor(branch){
        super(); // to invoke super class constructor.
        this.branch=branch;
    }
    work(){
        console.log("Solve Problems");
    }
}

let engg = new Engineer("chemical engg");

//ERROR HANDLING
let a = 5;
let b = 10;
console.log(a);
console.log(b);
console.log(a+b);
console.log(a+b);
try{
  console.log(a+c);//error
}catch(err){
  console.log(err);
}
console.log(a+b);
console.log(a+b);
console.log(a+b);
console.log(a+b);