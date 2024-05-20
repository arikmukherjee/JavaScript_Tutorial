let divs = document.querySelectorAll(".box");
console.log(divs);
console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);

let  i=1;
for(div of divs){
    div.innerText = `new unique value ${i}`;
    i++;
}

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";