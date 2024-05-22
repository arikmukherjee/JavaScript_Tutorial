let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("button was clicked");
//     let a = 25 ;
//     a++;
//     console.log(a);
// }
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.type,evt.target);
// }

//addEventListener(). We can create multiple event listener for an event//
// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler 1");
// });
// btn1.addEventListener("click", (evt) => {
//     console.log("button was clicked - handler 2");
//     console.log(evt);
//     console.log(evt.type);
// });

//removeEventListener()
btn1.addEventListener("click", () => {
  console.log("button was clicked - handler 1");
});
btn1.addEventListener("click", () => {
  console.log("button was clicked - handler 2");
});
btn1.addEventListener("click", () => {
  console.log("button was clicked - handler 3");
});
// btn1.addEventListener("click", () => {
//   console.log("button was clicked - handler 4");
// });
btn1.addEventListener("click", handler4);

const handler4 = btn1.removeEventListener("click", handler4);
