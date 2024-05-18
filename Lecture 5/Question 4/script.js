let marks = [85, 96, 78, 42, 65, 41, 89, 64, 77, 90];
let score90plus = marks.filter((score) => {
  return score >= 90;
});
console.log(score90plus);