// Store your birth year in a variable.
// Store a future year in a variable.
// Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
// Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.

let userName = "Jeremy";

let birthYear = 1994;

let userEnteredMonth = 4;

let futureYear = 2047;

let futureMonth = 8;

const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "Setpember", "October", "November", "December"]

let indexedMonth = userEnteredMonth - 1;
 
console.log(`${userName} was born in ${monthList[indexedMonth]} of ${birthYear}`);

//subtract birth year from future year. if birth month - future month <


