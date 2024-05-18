const countVowels = (messege) => {
  messege = prompt("Enter your messege");
  let count = 0;
  for (let i = 0; i < messege.length; i++) {
    if (
      messege[i] === "a" ||
      messege[i] === "e" ||
      messege[i] === "i" ||
      messege[i] === "o" ||
      messege[i] === "u"
    ) {
      count++;
    }
  }
  console.log("No. of vowels = ", count);
};
countVowels();
