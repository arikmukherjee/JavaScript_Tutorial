let btn  = document.createElement("button");
btn.innerText = "Click me!";
btn.style.backgroundColor = "red";
btn.style.color = "white";
console.log(btn);

let body = document.querySelector("body");
body.prepend(btn);