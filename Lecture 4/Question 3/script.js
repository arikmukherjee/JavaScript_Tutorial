// Qs. Create an array to store companies -> “Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end


let companies = ["Boomberg","Microsoft","Uber","Google","IBM","Netflix"];
// let delval = companies.shift();
let newComs = companies.splice(2,1,"Ola");
companies.push("Amazon");
console.log(companies);