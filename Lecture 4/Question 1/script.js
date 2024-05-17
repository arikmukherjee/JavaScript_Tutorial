/* Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.*/
let sum = 0;
let marks = [85, 97, 44, 37, 76, 60];
for (let i = 0 ; i < marks.length ; i++) {
    sum = sum + marks[i];
}
let avg = sum / marks.length;
console.log("Total marks = ",sum);
console.log("Average of marks = ",avg);