console.log("Hello"); //Hello
console.log(window);
window.console.log("Hello"); //Hello
window.alert("Hello");
console.dir(window.document);
console.dir(document);
console.dir(document.body.style.background="green");
console.dir(document.body.childNodes[1].background="green");
document.body.style.background="blue";

let heading = document.getElementById("header"); //h1
console.dir(heading);
console.log(window);
console.dir(window);
console.log(document.body);
console.dir(document.body);
console.dir(document.querySelector("div").childNodes);
console.dir(document.querySelector("div").children);
console.dir(document.querySelector("ul").innerText);
console.dir(document.querySelector("ul").textContent);
