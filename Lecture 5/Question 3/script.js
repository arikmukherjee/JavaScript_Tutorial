let arr = [2, 4, 6, 8, 10];
//type 1
arr.forEach(function square(val) {
  console.log(val ** 2);
});
//type 2
arr.forEach((val) => {
  console.log(val ** 2);
});
//type 3
let square = (val) => {
  console.log(val * val);
};
arr.forEach(square);
