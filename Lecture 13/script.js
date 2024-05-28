const URL = "https://cat-fact.herokuapp.com/facts";
let factPara = document.querySelector("#fact");
// let promise = fetch(URL);
// console.log(promise);

let btn = document.querySelector("#btn");

const getFacts = async () => {
  console.log("Getting data....");
  let response = await fetch(URL); //this is GET REQUEST.
  console.log(response);
  // console.log(response.status); //JSON format
  let data = await response.json(); //to make response readable, we use .json()
  // console.log(data);
  // console.log(data[0]);
  // console.log(data[0].text);
  factPara.innerText = data[0].text;
  factPara.innerText = data[1].text;
  factPara.innerText = data[2].text;
};

//USING PROMISE CHAINNING
// function getFacts() {
//   fetch(URL)
//     .then((response) => {
//       response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

btn.addEventListener("click", getFacts);

//HTTP request methods. -> https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
//HTTP response status code. -> https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//HTTP response header also contain details about the responses, such as content type,HTTP status code etc.
