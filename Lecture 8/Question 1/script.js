let modeBtn = document.querySelector("#mode");
let currentMode = "light";

modeBtn.addEventListener("click", () => {
  // console.log("You are trying to change mode")
  //   if (currentMode === "light") {
  //     currentMode = "dark";
  //     document.querySelector("body").style.backgroundColor="black";
  //   } else {
  //     currentMode = "light";
  //     document.querySelector("body").style.backgroundColor="white";
  //   }
  if (currentMode === "light") {
    currentMode = "dark";
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");
  } else {
    currentMode = "light";
    document.querySelector("body").classList.add("light");
    document.querySelector("body").classList.remove("dark");
  }
  console.log(currentMode);
});
