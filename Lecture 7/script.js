// let div = document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id); //box

// let Name = div.getAttribute("name");
// console.log(Name); //JS

// let parah = document.querySelector("p");
// console.log(parah.getAttribute("class"));
// console.log(parah.setAttribute("para","parag"));

// let div = document.querySelector("div");
// div.style.backgroundColor="red";
// div.style.fontSize = "20px";
// div.innerText="Hello";

let Btn = document.createElement("button");
Btn.innerText = "Click me!";
console.log(Btn);
let div  = document.querySelector("div");
div.append(Btn);
div.prepend(Btn);
div.before(Btn);
div.after(Btn);

let p  = document.querySelector("p");
p.append(Btn);
p.prepend(Btn);
p.before(Btn);
p.after(Btn);

let para = document.querySelector("p");
para.remove();

//appendChild() , removeChild() mdn study