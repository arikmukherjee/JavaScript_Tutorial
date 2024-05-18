let n = prompt("Enter nth value of the array");
let arr = [];
for (let i = 1; i <= n; i++) {
    arr[i-1]=i;
}
console.log(arr);

const outputSum = arr.reduce((result, currentValue) => {
    return result + currentValue;
  });
console.log(outputSum);

const outputMultiply = arr.reduce((result, currentValue) => {
    return result * currentValue;
  });
console.log(outputMultiply);