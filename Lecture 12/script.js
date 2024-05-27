// function sum(){
//     console.log(a+b);
// }

// function calculator(a, b, sumCallBack) {
//   sumCallBack(a, b);
// }

// calculator(1,2,sum); // sum() can't be passed as parameter . It will throw an error NaN.

// calculator(1, 2, (a, b) => {
//   console.log(a + b);
// });

// const hello = () => {
//   console.log("hello");
// };
// setTimeout(hello, 3000); // 3s = 3000ms . After 3s , hello will be printed.

// function getData(dataId) {
//   setTimeout(() => {
//     console.log("Data", dataId);
//   }, 3000);
// }

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("Data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 3000);
// }
//callback hell. This is nested callback.
// getData(1, () => {
//   getData(2, () => {
//     getData(3);
//   });
// });

//Promises in Javascript.
// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   resolve("Success");
//   reject("Some error!");
// });

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data", dataId);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 3000);
//   });
// }

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
// resolve("success");
//     reject("Error!!");
//   });
// };
// let promise = getPromise();
// promise.then((res) => {
//   console.log("Promise fullfilled.",res);
// });
//if reject() is called then 'promise.then()' will never be executed. Then we have to use 'promise.catch()'.
// promise.catch((err) => {
//   console.log("rejected",err);
// });
// Here automatically comes parameters like 'res','err'. And we can print these parameters.

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some Data1");
//       resolve("success!");
//     }, 4000);
//   });
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some Data2");
//       resolve("success!");
//     }, 4000);
//   });
// }
// console.log("fetching Data1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log(res);
// });
// console.log("fetching Data2");
// let p2 = asyncFunc2();
// p2.then((res) => {
//   console.log(res);
// });
// In this case data is fetched and returned together. But if we want to fetch data1 first then data2, in that case we use 'Promise Chain'.
// console.log("fetching Data1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log(res);
//   console.log("fetching Data2...");
//   let p2 = asyncFunc2();
//   p2.then((res) => {
//     console.log(res);
//   });
// });

// OR,

// console.log("fetching Data1...");
// asyncFunc1().then((res) => {
//   console.log(res);
//   console.log("fetching Data2...");
//   asyncFunc2().then((res) => {
//     console.log(res);
//   });
// });

//Async- Await
async function hello() {
  console.log("hello");
}
hello();

async function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather data...");
      resolve(200);
    }, 2000);
  });
}
async function getWeatherData() {
  await api(); //1st call
  await api(); //2nd call
}
//
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      resolve("success");
    }, 2000);
  });
}
// async function getAllData(){
//   console.log("Getting data1...");
//   await getData(1);
//   console.log("Getting data2...");
//   await getData(2);
//   console.log("Getting data3...");
//   await getData(3);
// }

//IIFE ( Immediately Invoked Function Expression). Here we don't need to call the function. It is automatically called.
//SYNTAX: (function{})();

(async function () {
  console.log("Getting data1...");
  await getData(1);
  console.log("Getting data2...");
  await getData(2);
  console.log("Getting data3...");
  await getData(3);
})();
