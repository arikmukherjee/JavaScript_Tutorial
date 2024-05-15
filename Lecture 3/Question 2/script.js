// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

// let gameNumber = 38;
// for(let i=0;i<5;i++) {
//     let userNumber = prompt("Guess the Game Number");
//     if(gameNumber == userNumber) {
//         console.log("You have guessed the right number");
//         break;
//     }   
// }

let gameNumber = 38;
let userNumber = prompt("Guess the Game Number");
while(userNumber != gameNumber) {
    userNumber = prompt("Wrong! Guess again.");
}
console.log("You have guessed the right number");